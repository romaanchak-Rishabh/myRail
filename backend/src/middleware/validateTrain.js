import ApiError from "../utils/apiErrors.js";

const validateTrain = (req, res, next) => {
    if(req.params.trainNumber && typeof req.params.trainNumber === 'string' && req.params.trainNumber.length === 5 && /^\d{5}$/.test(req.params.trainNumber)) {
        next();
    } else {
        next(new ApiError(400, "Invalid Train Number"))
    }
}

export default validateTrain;