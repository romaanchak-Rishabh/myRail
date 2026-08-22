import geographyService from "../services/geographyService.js";

const geographyController = async (req, res, next) => {
    try {
        const result = await geographyService(req.params.trainNumber);
        res.send(result);
    } catch (error) {
        next(error);
    }
}

export default geographyController;