import conf from "../config/config.js";
import ApiError from "../utils/apiErrors.js";


const railRadarProvider = async (trainNumber) => {
    try {
        const url = `${conf.railradarBaseUrl}/v1/trains/${trainNumber}/route?format=geojson&stops=true`
        const result = await fetch(url, { headers: { "Authorization": `Bearer ${conf.railradarAPI}` }})
        if(!result.ok) {
            throw new ApiError(result.status, `Couldn't get route for ${trainNumber}`)
        }
        const response = await result.json();
        if (!response.success || !response.data) {
            throw new ApiError(
                502,
                `Invalid route response for ${trainNumber}`
            );
        }

        const { data } = response;
        
        return {
            trainNumber: data.trainNumber,

            stops: data.stops.map((stop) => ({
                sequence: stop.sequence,
                stationCode: stop.code,
                station: stop.name,
                latitude: stop.lat,
                longitude: stop.lng
            })),

            routeGeometry: data.geojson?.geometry ?? null
        };
    } catch (error) {
        if (error instanceof ApiError) {
            throw error;
        }

        throw new ApiError(
            500,
            "Internal Server Error - RailRadar Route Provider"
        );
    }
}

export default railRadarProvider;