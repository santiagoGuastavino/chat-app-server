import express from 'express'
import corsProxy from 'cors-anywhere'

const app = express()

app.use((err, req, res, next) => {
  res.status(err.status).json({ error: err.message })
})

const PORT = process.env.PORT || 3001
const HOST = process.env.HOST || '0.0.0.0'

corsProxy.createServer({
  originWhitelist: [],
  // requireHeader: ['origin', 'x-requested-with'],
  removeHeaders: ['cookie', 'cookie2']
}).listen(PORT, HOST, () => {
  console.log('Running CORS Anywhere on ' + HOST + ':' + PORT)
})
