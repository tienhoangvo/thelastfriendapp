import { ObjectId } from 'mongodb'
import z from 'zod'
import { db } from '../services/connectDB'

export const membershipSchema = z.object({
  user: z.custom<ObjectId>(),
  channel: z.custom<ObjectId>(),
  status: z.enum(["pending", "accepted", "blocked", "kicked"]),
})

export type MembershipType = z.infer<typeof membershipSchema>

export const membershipModel = db.collection<MembershipType>("Membership")
