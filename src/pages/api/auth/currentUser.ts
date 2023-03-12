import { ObjectId } from 'mongodb'
import { NextApiHandler } from 'next'
import { userModel } from '../../../models/userModel'
import { verifyToken } from '../../../services/auth'

const currentUserApiHandler: NextApiHandler = async (req, res) => {
  const { accessToken } = req.cookies
  if (!accessToken) {
    return res.status(401).json({
      error: {
        name: 'UnauthenticatedError',
      },
    })
  }
  try {
    const { payload } = await verifyToken(accessToken)
    const user = await userModel.findOne({
      _id: new ObjectId(payload.sub),
    })
    res.json(user)
  } catch (error) {
    res.status(401).json({
      error,
    })
  }
}

export default currentUserApiHandler
