import type { NextApiHandler } from 'next'
const helloHandler: NextApiHandler = (req, res) => {
  res.json({
    message: "Haha"
  })
}

export default helloHandler