import ApiError from "../utils/apiErrors.js"
import weatherProvider from "../providers/weatherProvider.js";
import stationService from "./stationService.js";
import cache from "../cache/cacheService.js";

const weatherService = async (stationCodes) => {
    try {
        const stations = stationService(stationCodes);

        let cachedStationsWeather = [];
        let freshStations = [];

        stations.forEach((station) => {
            const cacheKey = `weather:${station.stationCode}`;
            const cachedWeather = cache.get(cacheKey);
            if(cachedWeather) {
                console.log(`Weather cached for ${station.stationCode}`);
                cachedStationsWeather.push(cachedWeather);
            } else {
                freshStations.push(station);
            }
        })

        let freshStationsWeather = [];
        if(freshStations.length > 0) {
            freshStationsWeather = await weatherProvider(freshStations);
            freshStationsWeather.forEach((weather) => {
                cache.set(`weather:${weather.stationCode}`, weather, 15 * 60 * 1000);
            })
        }

        let allStationsWeather = new Map();
        [...cachedStationsWeather, ...freshStationsWeather].forEach((weather) => {
            allStationsWeather.set(weather.stationCode, weather);
        });

        return stations.map((station) => {
            return allStationsWeather.get(station.stationCode)
        })
    } catch (error) {
        if(error instanceof ApiError) { throw error }
        else throw new ApiError(500, "Internal Server Error - Weather Service")
    }
}

export default weatherService