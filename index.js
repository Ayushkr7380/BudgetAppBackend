import app from './app.js';
import connectDB from './db/db.config.js';

const PORT = process.env.PORT || 4001;
const LOCALHOST = process.env.LOCALHOST || '127.0.0.1'

app.listen(PORT,LOCALHOST,async()=>{
    console.log(`Server ${LOCALHOST} is running at PORT ${PORT}`);
    await connectDB();
})