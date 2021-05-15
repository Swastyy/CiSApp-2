
const express = require("express");
const bodyParser = require("body-parser");
//const home = require("./home.ejs");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render(__dirname+"/views/home.ejs");
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});