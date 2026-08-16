import dotenv from 'dotenv'

dotenv.config()

const conf = {
    appUrl : Number(process.env.appUrl) || 3000,
    origin : String(process.env.CORS_ORIGIN),
    nodeEnv : String(process.env.NODE_ENV),
    trainBaseUrl : String(process.env.TRAIN_BASE_URL),
    elevationBaseUrl : String(process.env.ELEVATION_BASE_URL),
    weatherBaseUrl : String(process.env.WEATHER_BASE_URL),
    railradarBaseUrl : String(process.env.RAILRADAR_BASE_URL),
    railradarAPI : String(process.env.RAILRADAR_API)
}

export default conf