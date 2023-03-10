import { ObjectId } from 'mongodb'
import z from 'zod'
import { db } from '../services/connectDB'

export const channelSchema = z.object({
  name: z.string(),
  type: z.enum(["private", "public"]),
  admin: z.custom<ObjectId>(),
})

export type ChannelType = z.infer<typeof channelSchema>

export const channelModel = db.collection<ChannelType>('Channel')