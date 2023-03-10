import { MongoClient } from "mongodb"

const url = 'mongodb://localhost:27017'
const client = new MongoClient(url)

const dbName = 'thelastfriendapp'

export const connectDB = client.connect.bind(client)

export const db = client.db(dbName)
