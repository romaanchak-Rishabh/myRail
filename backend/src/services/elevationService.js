import ApiError from "../utils/apiErrors.js";
import elevationProvider from "../providers/elevationProvider.js";
import stationService from "./stationService.js";

const elevationService = async (stationCodes) => {
    try {
        const stations = stationService(stationCodes)
        
        const result = await elevationProvider(stations);
        return result;

    } catch(error) {
        if (error instanceof ApiError) { throw error; }
        throw new ApiError(500, "Internal Server Error - elevationService")
    }
}

export default elevationService