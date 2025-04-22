const dotenv = require("dotenv");
const express = require("express");
const cors = require('cors');
const { db } = require("./db/db");
const router = require("./routes/transcation");

dotenv.config();

const app = express();

const port = process.env.PORT;

app.use(express.json())
app.use(cors())
app.use("/api/v1",router)

const server= () =>{
    db()
    app.listen(port,() =>{
        console.log("App is running on port :",port)
    })
}
server()