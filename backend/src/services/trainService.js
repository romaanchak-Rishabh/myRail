// import railwayAPI from "../providers/railwayApi.js"
// import ApiError from "../utils/apiErrors.js"

// const trainService = async (trainNumber) => {
//     const response = await railwayAPI.get(`/train-running-status/${trainNumber}`);
//     console.log(response.data)
//     return response.data;
// }

// export default trainService

import erailTrainScraper from '../scraper/erailTrainScraper.js';
import ApiError from "../utils/apiErrors.js";

const trainService = async (trainNumber) => {
    try {
        const trainDetails = await erailTrainScraper(trainNumber);

        return trainDetails;
    } catch(error) {
        throw new ApiError(500, error.message)
    }
};

export default trainService