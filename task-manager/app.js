const connectDB = require('./db/connect')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
require('dotenv').config()
const port=3000

app.use(express.json())
app.use('/api/v1/tasks',tasks)
app.get('/hello',(req,res)=>{
   res.send('Hello world') 
})

const start=async()=>{
    try {
      await connectDB(process.env.DB_URI)
      app.listen( port, console.log(`Server is listening at ${port}...`))
    } catch (error) {
      console.log(error) 
    }
}

start()

