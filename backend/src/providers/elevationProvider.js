import ApiError from "../utils/apiErrors.js"
import conf from '../config/config.js'

const elevationProvider = async (stations) => {
    try {
        const lats = stations.map((station) => station.latitude).join(',');
        const longs = stations.map((station) => station.longitude).join(',');
        const result = await fetch(conf.elevationBaseUrl+'latitude='+lats+'&longitude='+longs)
        if(!result.ok) throw new ApiError(result.status, "Couldn't get the elevations")
        const response = await result.json();
        if ( !response.elevation || response.elevation.length !== stations.length ) throw new ApiError( 502, "Invalid elevation response" );
        
        return stations.map((station, index) => {
            return {...station, elevation: response.elevation[index]}
        })
    } catch(error) {
        if (error instanceof ApiError) throw error;
        throw new ApiError(500, "Internal Server Error - elevationProvider")
    }
}

export default elevationProvider