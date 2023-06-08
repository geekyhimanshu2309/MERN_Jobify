import 'express-async-errors';
import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();

// db abd authenticate user
import connectDB from './db/connect.js';

// routers
import authRouter from './routes/authRoutes.js';
import jobsRouter from './routes/jobsRoutes.js';

//middleware
import notFoundMiddleware from './middleware/not-found.js';
import errorHandlerMiddleware from './middleware/error-handler.js';

app.use(express.json());
console.log('hello')
console.log('hello')
console.log('hello')
console.log('hello')
console.log('hello')
app.get('/',(req, res) => {
    res.send('Welcome!');
});

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/jobs', jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000


const start = async() => {
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port,() => {
            console.log(`server is listening on port ${port}...`)
        })
    }
    catch(error){
        console.log(error)
    }
}

start()