import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import userAuth from './routes/user.auth.js';
import userItem from './routes/user.Items.js';

// config({path:"../Backend/.env"});
config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));

// app.use(cors({
    //     Credentials:true
    // }));
    
    // const corsOptions ={
    //     origin:'http://localhost:5173', 
    //     credentials:true,   //access-control-allow-credentials:true
    //     optionSuccessStatus:200
    // }
    // const corsOptions = {
    //     origin: ['http://localhost:5173', 'https://yourbudget.site'],
    //     credentials: true, // Allow cookies from frontend
    //     methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow all methods
    //     allowedHeaders: ['Content-Type', 'Authorization'] // Allow common headers
    // };
    const corsOptions = {
        origin: ['https://meek-melba-5eaddf.netlify.app', 'https://yourbudget.site'], 
        credentials: true, // Allow cookies from frontend
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Allow all HTTP methods
        allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
    };
    app.use(cors(corsOptions));
    app.use(cookieParser());

// app.use('/ayush',(req,res)=>{
//     res.status(200).send('Ayush is working..');
// });

app.use('/auth',userAuth);
app.use('/api',userItem);

app.get('/', (req, res) => {
    res.status(200).send('Server is running!');
});
app.all('*',(req,res)=>{
    res.status(404).send('Page not found!!');
});


export default app;