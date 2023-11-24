const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

let items = [];

app.get("/", (req, res)=> {
    let today = new Date();
    let options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    }
    let day = today.toLocaleDateString("en-US", options)
    res.render("list", { listTitle: day, listItems: items });
});

app.post("/", (req, res)=>{
        items.push(req.body.addItem);
        res.redirect("/");
});

app.get("/about", (req, res)=>{
    res.render("about");
})

app.listen(3000, function () {
    console.log("Server started at port 3000.")
});