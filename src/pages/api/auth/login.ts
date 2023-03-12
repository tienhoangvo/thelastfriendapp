import { compare } from 'bcryptjs'
import { NextApiHandler } from 'next'
import { serialize } from 'cookie'
import { userModel } from '../../../models/userModel'
import { signToken } from '../../../services/auth'
import { userSchema } from '../../../models/schemas'

const loginApiHandler: NextApiHandler = async (req, res) => {
  const parsedData = userSchema
    .pick({ username: true, password: true })
    .strict()
    .safeParse(req.body)

  if (parsedData.success === false) {
    return res.status(400).json({
      error: parsedData.error,
    })
  }
  const { data } = parsedData
  const user = await userModel.findOne({ username: data.username })
  if (!user) {
    return res.status(401).json({
      error: {
        issues: [
          {
            code: 'incorrect_credentials',
            message: 'Username or password is incorrect',
            path: ['username', 'password'],
          },
        ],
        name: 'LoginError',
      },
    })
  }

  const matched = await compare(data.password, user.password)

  if (!matched) {
    return res.status(401).json({
      error: {
        issues: [
          {
            code: 'incorrect_credentials',
            message: 'Username or password is incorrect',
            path: ['username', 'password'],
          },
        ],
        name: 'LoginError',
      },
    })
  }

  const token = await signToken(user._id.toString())

  res.setHeader(
    'Set-Cookie',
    serialize('accessToken', token, {
      maxAge: 60 * 60 * 2,
    })
  )

  res.json(user)
}

export default loginApiHandler
