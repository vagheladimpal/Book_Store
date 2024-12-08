const express=require("express")
const app=express()
const cors=require("cors")
const path=require("path")
const cookiesParser=require("cookie-parser")
const {restrictToLoggedinUserOnly}=require("./middlewares/auth")
const staticRouter=require("./routes/staticRouter")
const urlRoute=require("./routes/url")
const userRoute=require("./routes/user")
const bookRoute=require("./routes/book")
const {connectToMongoDb}=require("./connection")
const {fantasy}=require("./models/books")
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
  origin: 'http://192.168.1.6:3000', // Replace <Frontend-IP> with the frontend PC's IP
  credentials: true, // Include credentials if needed
}));
app.use(cookiesParser())

//routes
app.use("/url",restrictToLoggedinUserOnly,urlRoute)
app.use("/",staticRouter)
app.use("/user",userRoute)
app.use("/books",bookRoute)
app.listen(port, '0.0.0.0', () => {
  console.log(`Server started and accessible at http:// 192.168.1.5:${port}`);
});
