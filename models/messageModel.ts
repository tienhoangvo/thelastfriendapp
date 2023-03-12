import { db } from '../services/database'
import { MessageType } from './schemas'

export const messageModel = db.collection<MessageType>('Message')
