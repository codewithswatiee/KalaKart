const express = require("express");
const dbConnect = require("./config/database");
const cors = require("cors");
// const {user} = require("./routes/user");
// const {artisans} = require("./routes/artisans");
const authRoutes = require("./routes/auth");


const app = express();
app.use(cors());
require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());
// app.use("/user", user);
// app.use("/artisans", artisans);

app.use("/auth", authRoutes);
app.use("/" , (req, res) => {
    res.send("Hello World");
})
app.listen(PORT, () => {
    console.log("app running successfully");
})
dbConnect();



