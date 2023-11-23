const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send("Hello World!");
});

app.listen(3000, function(){
    console.log("Server started at port 3000.")
});