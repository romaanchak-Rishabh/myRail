import trainService from "../services/trainService.js"

const trainController = async (req, res, next) => {
    try {
        const result = await trainService(req.params.trainNumber)
        res.send(result);
    } catch(error){
        next(error)
    }
}

export default trainController