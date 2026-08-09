import railwayStations from "../data/railwayStations.json" with { type: "json" };

const erailParser = async (page) => {
    return page.locator("table.SpotTrain tr").evaluateAll(
        (rows, stationData) => {

            const cleanText = (cell) =>
                cell?.textContent
                    ?.replace(/\s+/g, " ")
                    .trim() || "";

            /*
             * Normalize station names so that:
             *
             * "Mumbai Central"
             * "MUMBAI CENTRAL"
             * "MUMBAI CENTRAL "
             *
             * can all be compared consistently.
             */
            const normalizeStationName = (name) =>
                name
                    ?.replace(/\s+/g, " ")
                    .trim()
                    .toUpperCase() || "";

            /*
             * Build a station-name → station-code lookup.
             *
             * Only use entries that actually have a code and name.
             */
            const stationMap = new Map();

            for (const feature of stationData.features) {
                const properties = feature.properties;

                if (!properties?.name || !properties?.code) {
                    continue;
                }

                const name = normalizeStationName(properties.name);

                stationMap.set(name, properties.code);
            }

            /*
             * eRail station cell can contain:
             *
             * MUMBAI CENTRAL<br>Platform-
             *
             * We only want:
             *
             * MUMBAI CENTRAL
             */
            const getStationName = (cell) => {
                if (!cell) {
                    return "";
                }

                const clone = cell.cloneNode(true);
                const br = clone.querySelector("br");

                if (br) {
                    let node = br;

                    while (node.nextSibling) {
                        node.nextSibling.remove();
                    }

                    br.remove();
                }

                return cleanText(clone);
            };

            const stations = [];

            for (const row of rows) {
                const cells = row.querySelectorAll("td");

                /*
                 * ----------------------------------------
                 * CURRENT TRAIN POSITION
                 * ----------------------------------------
                 */
                const statusCell = row.querySelector('td[colspan="3"]');
                const statusText = cleanText(statusCell);

                const isCurrentRow =
                    statusCell &&
                    /(?:Departed from|Arrived at|Approaching)/i.test(
                        statusText
                    );

                if (isCurrentRow) {
                    const match = statusText.match(
                        /(?:Departed from|Arrived at|Approaching)\s+(.+?)\(([^)]+)\)/
                    );

                    const station = match?.[1]?.trim() || "";
                    const stationCode = match?.[2]?.trim() || "";

                    stations.push({
                        station,
                        stationCode,
                        current: true,
                        status: statusText
                    });

                    continue;
                }

                /*
                 * ----------------------------------------
                 * NORMAL STATION ROW
                 * ----------------------------------------
                 */
                if (cells.length < 6) {
                    continue;
                }

                const arrival = cleanText(cells[0]);
                const arrivalDelay = cleanText(cells[1]);

                const station = getStationName(cells[3]);

                const departureDelay = cleanText(cells[4]);
                const departure = cleanText(cells[5]);

                if (!station) {
                    continue;
                }

                const stationCode =
                    stationMap.get(
                        normalizeStationName(station)
                    ) || null;

                stations.push({
                    arrival,
                    arrivalDelay,
                    station,
                    stationCode,
                    departureDelay,
                    departure,
                    current: false
                });
            }

            return stations;
        },
        railwayStations
    );
};

export default erailParser;