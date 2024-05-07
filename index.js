import express from "express"
import dotenv from "dotenv"
import user from "./routes/userRoute.js"
import {connectDB}  from "./DB/Confi/connection.js"



const app=express()
dotenv.config()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
// app.use (express.static(path.resolve(__dirname,"public")))
connectDB()

app.use("/",user)

app.listen(process.env.PORT,()=>{
    console.log(`Server PORT ${process.env.PORT}`);
})