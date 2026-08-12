import ApiError from "../utils/apiErrors.js"
import railwayStationsJSON from '../data/railwayStations.json' with {type: "json"}
import weatherProvider from "../providers/weatherProvider.js";

const weatherService = async (stationCodes) => {
    try {
        const stationWithCoor = stationCodes.map((stationCode) => {
            const station = railwayStationsJSON.features.find((item) => item.properties.code === stationCode);

            if(!station) throw new ApiError(404, `Station not found ${stationCode}`)
            
            if(!station.geometry?.coordinates) throw new ApiError(404, `Coordinates not found ${stationCode}`)
            
            const [longitude, latitude] = station.geometry.coordinates;

            return {
                stationCode,
                station: station.properties.name,
                latitude,
                longitude
            }
        })

        const response = await weatherProvider(stationWithCoor);
        return response;
    } catch (error) {
        if(error instanceof ApiError) { throw error }
        else throw new ApiError(500, "Internal Server Error - Weather Service")
    }
}

export default weatherService