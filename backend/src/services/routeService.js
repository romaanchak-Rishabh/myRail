import cache from "../cache/cacheService.js";
import railRadarProvider from "../providers/railRadarProvider.js";
import ApiError from "../utils/apiErrors.js";

const routeService = async (trainNumber) => {
    try {
        const cacheKey = `route:${trainNumber}`;
        const cachedRoute = cache.get(cacheKey);
        if(cachedRoute) {
            console.log("Train Route Cache Available");
            return cachedRoute;
        }

        const response = await railRadarProvider(trainNumber);
        console.log("Train Route Cache Available");
        cache.set(cacheKey, response, 7 * 24 * 60 * 60 * 1000);
        return response;
        
    } catch (error) {
        if(error instanceof ApiError) { throw error }
        else throw new ApiError(500, "Internal Server Error - RouteService")
    }
}

export default routeService;