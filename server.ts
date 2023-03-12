import { createServer } from 'http'
import { parse } from 'url'
import next from 'next'
import express from 'express'
import { Server } from 'socket.io'
import { connectDB } from './src/services/database'

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const expressApp = express()
const server = createServer(expressApp)
const port = process.env.PORT || 3000
const handle = nextApp.getRequestHandler()
const io = new Server(server)

connectDB().then(() => {
  console.log('DB connected')
})

nextApp.prepare().then(() => {
  expressApp.all('*', (req, res) => {
    const parsedURL = parse(req.url, true)
    handle(req, res, parsedURL)
  })

  server.listen(port, () => {
    console.log(`http://127.0.0.1:${port}`)
  })

  io.on('connection', (socket) => {
    console.log(`${socket.id} connected`)
  })
})
