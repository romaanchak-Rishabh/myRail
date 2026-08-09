import ApiError from "../utils/apiErrors.js";
import railwayStationJSON from '../data/railwayStations.json' with {type: "json"}
import elevationProvider from "../providers/elevationProvider.js";

const elevationService = async (stationCodes) => {
    try {
        const stationWithCoor = stationCodes.map((stationCode) => {
            const station = railwayStationJSON.features.find(item => item.properties.code === stationCode);
            if(!station) {
                throw new ApiError(404, `Station not found: ${stationCode}`)
            }
            if (!station.geometry?.coordinates) {
                throw new ApiError( 404, `Coordinates not found: ${stationCode}` );
            }
            
            const [longitude, latitude] = station.geometry.coordinates;

            return {
                stationCode,
                station: station.properties.name,
                latitude,
                longitude
            };
        })
        
        const result = await elevationProvider(stationWithCoor);
        return result;

    } catch(error) {
        if (error instanceof ApiError) { throw error; }
        throw new ApiError(500, "Internal Server Error - elevationService")
    }
}

export default elevationService