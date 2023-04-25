import dotenv from 'dotenv'
dotenv.config()

export default {
    app: {
        persistence: process.env.PERSISTENCE
    },
    mongo: {
        url: process.env.MONGO_URI || "mongodb://localhost:87634/basededatos8"
    }
}