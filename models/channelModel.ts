import { db } from '../services/database'
import { ChannelType } from './schemas'

export const channelModel = db.collection<ChannelType>('Channel')
