import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("home.ejs");
})

app.get("/about", (req, res) => {
    res.render("about.ejs");
})

app.get("/contact-us", (req, res) => {
    res.render("contact.ejs");
})



app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})