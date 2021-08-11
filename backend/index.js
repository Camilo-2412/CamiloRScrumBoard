const express = require("express");
const cors = require("cors");
const { dbConnection } = require("./db/db");
const User = require("./routes/userRoute");
const Role = require("./routes/roleRoute");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/role" ,Role);
app.use("/api/user" ,User);

app.listen(process.env.PORT , () =>{
    console.log("Backend server running OK, on port: ",process.env.PORT );
});

dbConnection();