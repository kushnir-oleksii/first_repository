import express from 'express';
import mongoose from 'mongoose';
const url = 'mongodb://localhost:27017/shop';


const PORT = 3000;

const app = express();

app.get('/', (req, res)=>{
    res.send('<h1>Wellcome</h1>');
})

mongoose.connect(url)
        .then(()=> {
            console.log('Connected to DB');
            app.listen(PORT, ()=> {
                console.log(`Server started on http://localhost:${PORT}`);
            })
        })
        .catch((err)=> {console.log(`DB connection error: ${err}`)});