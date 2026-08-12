import elevationService from "../services/elevationService.js";

const elevationController = async (req, res, next) => {
    try {
        const result = await elevationService(req.body.stationCodes)
        res.send(result);
    } catch(error) {
        next(error)
    }
}

export default elevationController;