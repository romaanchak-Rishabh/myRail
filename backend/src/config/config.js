import dotenv from 'dotenv'

dotenv.config()

const conf = {
    appUrl : Number(process.env.appUrl) || 3000,
    origin : String(process.env.CORS_ORIGIN),
    nodeEnv : String(process.env.NODE_ENV)
}

export default conf