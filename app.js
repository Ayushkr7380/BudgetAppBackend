import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import userAuth from './routes/user.auth.js';

config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors({
    Credential:true
}));

// app.use('/ayush',(req,res)=>{
//     res.status(200).send('Ayush is working..');
// });

app.use('/auth',userAuth);

app.all('*',(req,res)=>{
    res.status(404).send('Page not found!!');
});


export default app;