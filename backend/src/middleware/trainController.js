import trainService from "../services/trainService.js"

const trainController = (req, res, next) => {
    const result = trainService(req.params.trainNumber)

    res.json(result)
}

export default trainController