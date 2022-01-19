import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRouters from './routes/posts.js';

const app = express();

//routers

app.use(express.json({limit: "30mb", extended: true }));
app.use(express.urlencoded({limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRouters);



const connection_url = 'mongodb+srv://mern:memories@cluster0.8eobg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(connection_url, { useUnifiedTopology: true})
    .then(() => {
        app.listen(5000, () => {
            console.log('connected to db and listening server at port: 5000');
        });
    })
    .catch(error => {
        console.log(error.message);
    });

