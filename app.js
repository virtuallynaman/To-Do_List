const express = require("express");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

let items = [];
let workItems = [];

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
    if (req.body.list === "Work List") {
        workItems.push(req.body.addItem);
        res.redirect("/work");
    } else {
        items.push(req.body.addItem);
        res.redirect("/");
    }
    console.log(req.body.list);
});

app.get("/work", (req, res)=>{
    res.render("list", { listTitle: "Work List", listItems: workItems })
})

app.get("/about", (req, res)=>{
    res.render("about");
})

app.listen(3000, function () {
    console.log("Server started at port 3000.")
});