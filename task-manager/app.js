const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

const errorHandler = require('./middleware/error-handler')
const notFound = require('./middleware/not-found')

const port = process.env.PORT || 5000

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/tasks',tasks)

app.use(notFound)
app.use(errorHandler)

const start=async()=>{
    try {
      await connectDB(process.env.DB_URI)
      app.listen( port, ()=>{
        console.log(`Server is listening at ${port}...`)}
      )
    } catch (error) {
      console.log(error) 
    }
}

start()

