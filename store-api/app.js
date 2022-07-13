require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const productsRouter = require('./routes/products');

const notFoundMiddleware = require('./middleware/not-found');
const errorMiddleware = require('./middleware/error-handler');

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('<h1>Store API </h1> <a href="/api/v1/products"> Products Routes </a>');
})

app.use('/api/v1/products', productsRouter);


app.use(errorMiddleware);
app.use(notFoundMiddleware);


const port = process.env.PORT || 5000;

const start = async() => {
    try{
        await connectDB(process.env.DB_URI);
        app.listen( port, ()=>{console.log(`Listening at port: ${port}...`)});
    }
    catch(error){
        console.log(error);
    }
}

start();