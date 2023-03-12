import { NextApiHandler } from 'next'
import { userModel } from '../../../models/userModel'
import { signToken } from '../../../services/auth'
import { serialize } from 'cookie'
import { hash } from 'bcryptjs'
import { userSchema } from '../../../models/schemas'

const signupApiHandler: NextApiHandler = async (req, res) => {
  const parsedData = userSchema
    .pick({
      email: true,
      username: true,
      password: true,
    })
    .safeParse(req.body)

  if (parsedData.success === false) {
    return res.status(400).json({
      error: parsedData.error,
    })
  }

  const { data } = parsedData

  data.password = await hash(data.password, 10)

  let newUser = { ...data, createdAt: new Date() }

  const { insertedId } = await userModel.insertOne(newUser)

  const token = await signToken(insertedId.toString())

  res.setHeader(
    'Set-Cookie',
    serialize('accessToken', token, {
      maxAge: 60 * 60 * 2,
    })
  )

  res.json(newUser)
}

export default signupApiHandler
