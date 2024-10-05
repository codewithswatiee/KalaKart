const express = require("express");
const {dbConnect} = require("./config/database");
const {user} = require("./routes/user");
const {artisans} = require("./routes/artisans");


const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json);
app.use("/user", user);
app.use("/artisans", artisans);
dbConnect();
app.listen(PORT, () => {
    console.log("app running successfully");
})


