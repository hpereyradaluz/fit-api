import express from 'express'
import mongoose from 'mongoose'
import routes from './routes/index'
import http from 'http'
import cors from 'cors'

const port = process.env.PORT || 5000

const app = express()
app.use(cors())

const server = http.createServer(app)

const uri = 'mongodb://api:api@localhost:27017/test' // or connect to mongodb atlas instance

const opt = {
  useNewUrlParser: true,
  reconnectTries: 10,
  reconnectInterval: 500,
}

// eslint-disable-next-line no-console
server.listen(port, () => console.log(`Listening on port ${port}`))

// Rutas
routes(app)

mongoose.connect(uri, opt).then(
  (con) => {
    // eslint-disable-next-line no-console
    console.log(`Conexion a base en puerto ${con.connections[0].port}`)
    server()
  },
  (err) => {
    // eslint-disable-next-line no-console
    console.log(`Error al conectar con base de datos: ${err}`)
  }
)
