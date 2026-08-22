import ApiError from "../utils/apiErrors.js";
import cache from "../cache/cacheService.js";
import routeService from "./routeService.js";
import geographyProvider from "../providers/geographyProvider.js";

const geographyService = async (trainNumber) => {
    try {
        const cachedGeography = cache.get(`geography:${trainNumber}`);
        if(cachedGeography) return cachedGeography;

        const route = await routeService(trainNumber);
        if (!route?.routeGeometry) {
            throw new ApiError(
                404,
                `Route geometry not available for ${trainNumber}`
            );
        }
        const geography = await geographyProvider(route);
        cache.set(`geography:${trainNumber}`, geography, 30 * 24 * 60 * 60 * 1000);
        
        return geography;
    } catch (error) {
        if(error instanceof ApiError) { throw error }
        else throw new ApiError(error.statusCode || 500, "Internal Server Error - GeoGraphy Service")
    }
}

export default geographyService;