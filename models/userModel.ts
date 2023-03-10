import z from 'zod'
import { db } from '../services/connectDB'

export const userSchema = z.object({
  username: z.string().trim().toLowerCase().min(1),
  email: z.string().email(),
  password: z.string().trim().min(6),
  createdAt: z.date()
})

export type UserType = z.infer<typeof userSchema>

export const userModel = db.collection<UserType>("User")



// Saturday 8 / 4
// Da Nang - Da Lat: 1h30
// priorities: 2.3.5 -> 3.0
// 7 / 4: An Nha Hang Quan 3
