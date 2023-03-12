import type { ObjectId } from 'mongodb'
import z from 'zod'

export const channelSchema = z.object({
  name: z.string(),
  type: z.enum(['private', 'public']),
  admin: z.custom<ObjectId>(),
})

export type ChannelType = z.infer<typeof channelSchema>

const friendshipSchema = z.object({
  requester: z.custom<ObjectId>(),
  accepter: z.custom<ObjectId>(),
  status: z.enum(['pending', 'accepted', 'blocked', 'unfriended']),
})

export type FriendshipType = z.infer<typeof friendshipSchema>

export const membershipSchema = z.object({
  user: z.custom<ObjectId>(),
  channel: z.custom<ObjectId>(),
  status: z.enum(['pending', 'accepted', 'blocked', 'kicked']),
})

export type MembershipType = z.infer<typeof membershipSchema>

export const userSchema = z.object({
  username: z.string().trim().toLowerCase().min(1),
  email: z.string().email(),
  password: z.string().trim().min(6),
  createdAt: z.date(),
})

export type UserType = z.infer<typeof userSchema>

const messageSchema = z.object({
  from: z.custom<ObjectId>(),
  to: z.custom<ObjectId>(),
  type: z.enum(['group', 'direct']),
  content: z.string(),
  createdAt: z.date(),
})

export type MessageType = z.infer<typeof messageSchema>
