import { ObjectId } from 'mongodb'
import z from 'zod'
import { db } from '../services/connectDB'

const friendshipSchema = z.object({
  requester: z.custom<ObjectId>(),
  accepter: z.custom<ObjectId>(),
  status: z.enum(["pending", "accepted", "blocked", "unfriended"])
})

export type FriendshipType = z.infer<typeof friendshipSchema>

export const friendshipModel = db.collection<FriendshipType>('Friendship')