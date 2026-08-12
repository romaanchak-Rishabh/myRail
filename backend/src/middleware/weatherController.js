import weatherService from "../services/weatherService.js"

const weatherController = async (req, res, next) => {
    try {
        const result = await weatherService(req.body.stationCodes);
        res.send(result);
    } catch (error) {
        next(error)
    }
}

export default weatherController