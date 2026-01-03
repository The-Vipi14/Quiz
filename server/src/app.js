import express from 'express'
import cors from 'cors'

const app = express()

// middleware

app.use(cors())
app.use(express.json());

app.get("/",async (req,res)=>{
    res.send("server setup successful");
});


export default app;