import ApiError from "../utils/apiErrors.js";
import elevationProvider from "../providers/elevationProvider.js";
import stationService from "./stationService.js";
import cache from "../cache/cacheService.js";

const elevationService = async (stationCodes) => {
    try {
        const stations = stationService(stationCodes)

        const cachedStationsElevation = [];
        const freshStations = [];

        stations.forEach((station) => {
            const cacheKey = `elevation:${station.stationCode}`;
            const cachedElevation = cache.get(cacheKey);
            if(cachedElevation) {
                console.log(`Elevation cached for ${station.stationCode}`);
                cachedStationsElevation.push(cachedElevation);
            } else {
                freshStations.push(station)
            }
        })

        let freshStationsElevation = [];
        if(freshStations.length > 0) {
            freshStationsElevation = await elevationProvider(freshStations);

            freshStationsElevation.forEach((station) => {
                const cacheKey = `elevation:${station.stationCode}`;
                cache.set(cacheKey, station, 30 * 24 * 60 * 60 * 1000);
            })
        }

        let elevationMap = new Map();
        [...cachedStationsElevation, ...freshStationsElevation].forEach((station) => {
            elevationMap.set(station.stationCode, station);
        })

        return stations.map((station) => {
            return elevationMap.get(station.stationCode)
        })
    } catch(error) {
        if (error instanceof ApiError) { throw error; }
        throw new ApiError(500, "Internal Server Error - elevationService")
    }
}

export default elevationService