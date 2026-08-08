const apiHealthCheck = (req, res, next) => {
    try {
        res.status(200).json({message: "API Health Good"})
    } catch(error) {
        next(error)
    }
}

export default apiHealthCheck