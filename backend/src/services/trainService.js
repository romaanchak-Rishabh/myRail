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
import cache from '../cache/cacheService.js'

const trainService = async (trainNumber) => {
    try {
        const cacheKey = `train:${trainNumber}`;
        const cacheTrain = cache.get(cacheKey);
        if(cacheTrain) { 
            console.log("Live Train Cache Available");
            return cacheTrain 
        }

        const trainDetails = await erailTrainScraper(trainNumber);
        console.log("Live Train Cache Not Available");
        cache.set(cacheKey, trainDetails, 60 * 1000)
        
        return trainDetails;
    } catch(error) {
        throw new ApiError(500, error.message)
    }
};

export default trainService