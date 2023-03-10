import z from 'zod'
import { ObjectId } from 'mongodb'
import { db } from '../services/connectDB'

const messageSchema = z.object({
  from: z.custom<ObjectId>(),
  to: z.custom<ObjectId>(),
  type: z.enum(["group", "direct"]),
  content: z.string(),
  createdAt: z.date()
})

export type MessageType = z.infer<typeof messageSchema>

export const messageModel = db.collection<MessageType>("Message")