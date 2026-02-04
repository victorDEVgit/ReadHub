import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import connectDB from './config/db.js'
import authRoutes from './routes/auth.routes.js'
// import userRoutes from './routes/userRoutes.js'
// import bookRoutes from './routes/bookRoutes.js'
// import reviewRoutes from './routes/reviewRoutes.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Test route
app.get('/', (req, res) => {
  res.send('Welcome to ReadHub API')
})

// Routes
app.use('/api/auth', authRoutes)
// app.use('/api/users', userRoutes)
// app.use('/api/books', bookRoutes)
// app.use('/api/reviews', reviewRoutes)

const PORT = process.env.PORT || 5000

app.listen(PORT, async () => {
  await connectDB()
  console.log(`Server is running on port ${PORT}`)
})
