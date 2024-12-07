const express=require("express")
const app=express()
const cors=require("cors")
const path=require("path")
const cookiesParser=require("cookie-parser")
const {restrictToLoggedinUserOnly}=require("./middlewares/auth")
const staticRouter=require("./routes/staticRouter")
const urlRoute=require("./routes/url")
const userRoute=require("./routes/user")
const {connectToMongoDb}=require("./connection")
const port=8000
//views
app.set("view engine","ejs")
app.set("views",path.resolve("./views"))

//connection
connectToMongoDb("mongodb://127.0.0.1:27017/short-url")
.then(()=>{ console.log("mongoDB connected")})

app.use(express.json()); // This is required for parsing JSON bodies
app.use(express.urlencoded({extended:false}))
app.use(cors({
    origin: 'http://localhost:3000', // Frontend origin
    credentials: true,              // Include credentials if needed
  }));  
app.use(cookiesParser())

//routes
app.use("/url",restrictToLoggedinUserOnly,urlRoute)
app.use("/",staticRouter)
app.use("/user",userRoute)
app.listen(port,console.log("server started"))