import { NextApiHandler } from 'next'
import { serialize } from 'cookie'

const logoutApiHandler: NextApiHandler = (_, res) => {
  res.setHeader(
    'Set-Cookie',
    serialize('accessToken', '', {
      maxAge: 0,
    })
  )
  res.status(204).end()
}

export default logoutApiHandler
