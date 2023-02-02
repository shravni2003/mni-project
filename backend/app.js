require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./db/connect')
const port = process.env.PORT || 5000;
const router = require('./routes/applicantRoutes');

app.use(express.json());
app.use('/api/v1/applicants', router);

app.all('*',(req,res)=>{
    res.send("404 not found")
})
const start = async(URL) => {
    try{
        await connectDB(URL)
        app.listen(port,()=> console.log(`app is listening at port ${port}`))
    }catch(err){
        console.log(err);
    }
}


start(process.env.MONGO_URI);