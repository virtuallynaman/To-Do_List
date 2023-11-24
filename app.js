const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));

app.set("view engine", "ejs");

var items = [];

app.get("/", (req, res)=> {
    var today = new Date();
    var options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    }
    var day = today.toLocaleDateString("en-US", options)
    res.render("list", {
        kindOfDay: day, listItems: items
    });
});

app.post("/", (req, res)=>{
    items.push(req.body.addItem);
    res.redirect("/")
});

app.listen(3000, function () {
    console.log("Server started at port 3000.")
});