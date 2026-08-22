import conf from "../config/config.js";
import ApiError from "../utils/apiErrors.js";


const weatherProvider = async (stations) => {
    try {

        const responses = await Promise.all(
            stations.map(async (station) => {

                const result = await fetch(
                    `${conf.weatherBaseUrl}&q=${station.latitude},${station.longitude}&aqi=yes`
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
                    weather: {
                        temperature: weather.current.temp_c,
                        feelsLike: weather.current.feelslike_c,
                        humidity: weather.current.humidity,
                        windKph: weather.current.wind_kph,
                        condition: weather.current.condition.text,
                        icon: weather.current.condition.icon,
                        willItRain: weather.current.will_it_rain,
                        chanceOfRain: weather.current.chance_of_rain,
                        willItSnow: weather.current.will_it_snow,
                        chanceOfSnow: weather.current.chance_of_snow
                    },
                    airQuality: weather.current.airQuality
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