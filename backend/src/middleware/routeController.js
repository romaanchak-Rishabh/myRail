import routeService from "../services/routeService.js";

const routeController = async (req, res, next) => {
    try {
        const result = await routeService(req.params.trainNumber)
        res.send(result);
    } catch (error) {
        next(error)
    }
}

export default routeController