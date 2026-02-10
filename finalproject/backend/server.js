const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectdb = require("./config/db");
const productrouter = require("./routes/productroutes");
const userrouter = require("./routes/userroutes");
const app = express();
app.use(cors());
app.use(express.json());
connectdb();

app.get("/",(req,res)=>{
    res.send("api is working");
});
app.use("/api/products",productrouter);
app.use("/api/auth",userrouter);

const PORT = process.env.PORT || 6800;
app.listen(PORT,()=>console.log("server is running port 6800"));