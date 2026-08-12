import ApiError from "../utils/apiErrors.js"
import weatherProvider from "../providers/weatherProvider.js";
import stationService from "./stationService.js";

const weatherService = async (stationCodes) => {
    try {
        const stations = stationService(stationCodes);

        const response = await weatherProvider(stations);
        return response;
    } catch (error) {
        if(error instanceof ApiError) { throw error }
        else throw new ApiError(500, "Internal Server Error - Weather Service")
    }
}

export default weatherService