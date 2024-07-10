const express= require('express')
require('dotenv').config();
const mongoose = require('mongoose')
const app = express()
const taskRoutes = require('./routes/taskRoute')
const cors=require('cors')

//middleware
app.use((req,res,next)=>{
   console.log("path" + req.path+ 'method' + req.method); 
   next(); //to call the middleware
});

app.use(express.json());

app.use(cors());

// app.get("/",(req,res)=>{
//     res.send("hello hii");
// });

//DB CONNECT
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
                console.log("DB connected listening to " + process.env.PORT);  // after mongoDb connection..we need to listen port
            });
    })
    .catch((err)=>console.log(err));


// app.listen(process.env.PORT,()=>{
//     console.log("listening to " + process.env.PORT);
// });

//to setup base route
app.use('/api/tasks',taskRoutes);