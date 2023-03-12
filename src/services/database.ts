import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: '.env.local' })
}

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017'

const client = new MongoClient(uri)

const dbName = 'thelastfriendapp'

export const connectDB = client.connect.bind(client)

export const db = client.db(dbName)
