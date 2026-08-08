import dotenv from 'dotenv'

dotenv.config()

const conf = {
    appUrl : Number(process.env.appUrl) || 3000,
    origin : String(process.env.ORIGIN)
}

export default conf