import railRadarProvider from "../providers/railRadarProvider.js";
import ApiError from "../utils/apiErrors.js";

const routeService = async (trainNumber) => {
    try {
        const response = await railRadarProvider(trainNumber)
        return response;
    } catch (error) {
        if(error instanceof ApiError) { throw error }
        else throw new ApiError(500, "Internal Server Error - RouteService")
    }
}

export default routeService;