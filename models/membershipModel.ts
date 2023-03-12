import { db } from '../services/database'
import { MembershipType } from './schemas'

export const membershipModel = db.collection<MembershipType>('Membership')
