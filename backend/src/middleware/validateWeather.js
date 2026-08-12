const validateWeather = (req, res, next) => {
    try {
        const {stationCodes} = req.body;
        if(Array.isArray(stationCodes) && stationCodes.every(station => typeof station === "string" && station.trim().length > 0) && stationCodes.length > 0 && stationCodes.length <=10) {
            next()
        }
    } catch (error) {
        next(new ApiError(400, "Invalid Params"))
    }
}

export default validateWeather