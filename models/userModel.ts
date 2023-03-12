import { db } from '../services/database'
import { UserType } from './schemas'

export const userModel = db.collection<UserType>('User')
