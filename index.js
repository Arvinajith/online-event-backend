import express from 'express'
import 'dotenv/config.js'
import cors from 'cors'
import Routes from './routes/index.js'

const PORT = process.env.PORT
const app = express()

app.use(
  cors({
    origin: [
      'http://localhost:5173',                     // Local frontend
      'https://meek-centaur-e074f1.netlify.app/',   // Replace with your deployed frontend URL
    ],
    credentials: true, // allow cookies / auth headers
  })
)

app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({limit: '50mb', extended:  true}))

app.use(Routes)

app.get('/', (req, res)=>res.send(`<h1> Server is up and Running </h1>`))

app.listen(PORT, ()=>console.log(`Server is Running at the port ${PORT}`))
