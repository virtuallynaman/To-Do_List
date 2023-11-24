const express = require("express");
const date = require("./date");
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

const items = [];
const workItems = [];

app.get("/", (req, res)=> {
    const day = date.getDate();
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