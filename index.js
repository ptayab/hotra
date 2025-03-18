import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use((req, res, next) => {
    res.locals.activePage = req.path; // This will store the current route
    next();
});

app.get("/", (req, res) => {
    res.render("home", { activePage: "/" });
})

app.get("/about", (req, res) => {
    res.render("about", { activePage: "/about" });
})

app.get("/services", (req, res) => {
    res.render("services", { activePage: "/services" });
});

app.get("/contact-us", (req, res) => {
    res.render("contact.ejs",{ activePage: "/contact-us" });
})



app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`)
})