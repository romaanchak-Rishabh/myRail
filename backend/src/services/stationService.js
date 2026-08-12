import railwayStationJSON from '../data/railwayStations.json' with {type: "json"}

const stationService = (stationCodes) => {
    try {
        const response = stationCodes.map((stationCode) => {
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
            });
        return response;
    } catch (error) {
        if (error instanceof ApiError) { throw error; }
        throw new ApiError(500, "Internal Server Error - elevationService")
    }
}

export default stationService