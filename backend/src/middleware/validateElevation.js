import ApiError from "../utils/apiErrors.js"

const validateElevation = (req, res, next) => {
    const {stationCodes} = req.body
    if(Array.isArray(stationCodes) && stationCodes.every(station => typeof station === 'string' && station.trim().length > 0) && stationCodes.length>0 && stationCodes.length <= 100) {
        next();
    } else {
        next(new ApiError(400, "Invalid Params"))
    }
}

export default validateElevation;