

const express = require('express');
const mongoose = require('mongoose');
const route = require("./Route/UserRoutes");
const app = express();
const cors = require("cors");

// Middleware
/*app.use("/users",(req,res,next) => {
    res.send('It Is Working,sahan');
});*/
app.use(cors());
app.use(express.json());
app.use("/user", route);

mongoose.connect("mongodb+srv:/")
.then(() => {
    console.log("Connected to MongoDB");
})  
.then(() => {
    app.listen(5000);
    })
.catch((err) => console.log((err)));
