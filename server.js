const express = require('express');

const mongoose = require('mongoose');

const tasksRoutes = require('./routes/tasks')
require('dotenv').config();
const cors = require('cors');
const authRoutes = require('./routes/auth');



const app = express();

app.use('/routes/auth', authRoutes);

//middleware
app.use(cors());

app.use (express.json()); 



//mongodb connection

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('Mongodb connected'))
.catch(err => console.log(err));

app.use('/tasks',tasksRoutes);

app.get('/',(req,res)=>{
    res.send('hello, kanban board API!');
});

const PORT = process.env.PORT ||3001;

// const PORT = 3001;

app.listen(PORT,()=>console.log(`server is runing on port http://localhost:${PORT}`));