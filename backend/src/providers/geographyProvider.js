import ApiError from "../utils/apiErrors.js";

const OVERPASS_URL =
    "https://overpass.private.coffee/api/interpreter";

const SEGMENT_SIZE = 50;

// Expand each route segment by roughly this many degrees.
// This gives Overpass some area around the railway.
const BUFFER = 0.15;


/*
 * Split the LineString into approximately equal chunks.
 */
const createSegments = (coordinates) => {
    const segments = [];

    for (let i = 0; i < coordinates.length - 1; i += SEGMENT_SIZE) {
        const segment = coordinates.slice(
            i,
            Math.min(i + SEGMENT_SIZE + 1, coordinates.length)
        );

        if (segment.length >= 2) {
            segments.push(segment);
        }
    }

    return segments;
};


/*
 * Convert a route segment into a bounding box.
 *
 * GeoJSON coordinate:
 * [longitude, latitude]
 */
const getBoundingBox = (segment) => {

    const longitudes = segment.map(([longitude]) => longitude);
    const latitudes = segment.map(([, latitude]) => latitude);

    return {
        south: Math.min(...latitudes) - BUFFER,
        west: Math.min(...longitudes) - BUFFER,
        north: Math.max(...latitudes) + BUFFER,
        east: Math.max(...longitudes) + BUFFER
    };
};


const fetchOverpass = async (bbox) => {

    const {
        south,
        west,
        north,
        east
    } = bbox;

    const query = `
        [out:json][timeout:60];

        (
            way["bridge"](${south},${west},${north},${east});
            way["tunnel"](${south},${west},${north},${east});
            way["waterway"="river"](${south},${west},${north},${east});
        );

        out center tags;
    `;

    const response = await fetch(OVERPASS_URL, {
        method: "POST",

        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Accept": "application/json",
            "User-Agent": "myRail/1.0"
        },

        body: "data=" + encodeURIComponent(query)
    });

    const text = await response.text();

    if (!response.ok) {
        throw new ApiError(
            response.status,
            `Overpass request failed: ${text.slice(0, 500)}`
        );
    }

    try {
        return JSON.parse(text);
    } catch {
        throw new ApiError(
            502,
            "Invalid JSON returned by Overpass"
        );
    }
};


const geographyProvider = async (route) => {

    try {

        const coordinates = route?.routeGeometry?.coordinates;

        if (
            !Array.isArray(coordinates) ||
            coordinates.length < 2
        ) {
            throw new ApiError(
                400,
                "Invalid route geometry"
            );
        }

        /*
         * Split the railway route into manageable sections.
         */
        const segments = createSegments(coordinates);

        console.log(
            `Geography route contains ${coordinates.length} points`
        );

        console.log(
            `Querying ${segments.length} Overpass segments`
        );


        /*
         * IMPORTANT:
         *
         * Do NOT make hundreds of requests simultaneously.
         *
         * Start sequentially.
         */
        const allElements = [];

        for (let i = 0; i < segments.length; i++) {

            const bbox = getBoundingBox(segments[i]);

            console.log(
                `Overpass segment ${i + 1}/${segments.length}`,
                bbox
            );

            const result = await fetchOverpass(bbox);

            if (Array.isArray(result.elements)) {
                allElements.push(...result.elements);
            }
        }


        /*
         * Deduplicate OSM elements.
         *
         * Same bridge/river/tunnel may appear
         * in multiple overlapping bounding boxes.
         */
        const uniqueElements = new Map();

        for (const element of allElements) {

            const key = `${element.type}:${element.id}`;

            if (!uniqueElements.has(key)) {
                uniqueElements.set(key, element);
            }
        }


        return {
            trainNumber: route.trainNumber,

            geography: Array.from(
                uniqueElements.values()
            )
        };

    } catch (error) {

        if (error instanceof ApiError) {
            throw error;
        }

        console.error(
            "Geography Provider Error:",
            error
        );

        throw new ApiError(
            500,
            "Internal Server Error - Geography Provider"
        );
    }
};


export default geographyProvider;