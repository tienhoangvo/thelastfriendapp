import { db } from '../services/database'
import { FriendshipType } from './schemas'

export const friendshipModel = db.collection<FriendshipType>('Friendship')
