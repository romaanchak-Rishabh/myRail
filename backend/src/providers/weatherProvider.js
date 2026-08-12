import conf from "../config/config.js";
import ApiError from "../utils/apiErrors.js";


const weatherProvider = async (stations) => {
    try {

        const responses = await Promise.all(
            stations.map(async (station) => {

                const result = await fetch(
                    `${conf.weatherBaseUrl}&q=${station.latitude},${station.longitude}`
                );

                if (!result.ok) {
                    throw new ApiError(
                        result.status,
                        `Couldn't get weather for ${station.stationCode}`
                    );
                }

                const weather = await result.json();

                return {
                    stationCode: station.stationCode,
                    station: station.station,
                    latitude: station.latitude,
                    longitude: station.longitude,
                    weather
                };
            })
        );

        return responses;

    } catch (error) {

        if (error instanceof ApiError) {
            throw error;
        }

        throw new ApiError(
            500,
            "Internal Server Error - Weather Provider"
        );
    }
};


export default weatherProvider;