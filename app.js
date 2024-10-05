import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import userAuth from './routes/user.auth.js';
import userItem from './routes/user.Items.js';

config({path:"../Backend/.env"});
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
app.use(cookieParser());

// app.use(cors({
//     Credential:true
// }));

const corsOptions ={
    origin:'http://localhost:5173', 
    credentials:true,   //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// app.use('/ayush',(req,res)=>{
//     res.status(200).send('Ayush is working..');
// });

app.use('/auth',userAuth);
app.use('/api',userItem);

app.all('*',(req,res)=>{
    res.status(404).send('Page not found!!');
});


export default app;