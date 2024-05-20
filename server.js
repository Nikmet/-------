const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const jsonParser = bodyParser.json();

const PORT = 3000;

console.log(path.resolve(__dirname, "./src/assets"));
app.use("/src/assets/", express.static(path.resolve(__dirname, "./src/assets")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "index.html"));
});
app.get("/application.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "application.html"));
});
app.get("/serveces.html", (req, res) => {
    res.sendFile(path.resolve(__dirname, "serveces.html"));
});
app.get("/dist/css/index.css", (req, res) => {
    res.setHeader("Content-type", "text/css");
    res.sendFile(path.resolve(__dirname, "./dist/css/index.css"));
});
app.get("/dist/css/application.css", (req, res) => {
    res.setHeader("Content-type", "text/css");
    res.sendFile(path.resolve(__dirname, "./dist/css/application.css"));
});
app.get("/dist/css/serveces.css", (req, res) => {
    res.setHeader("Content-type", "text/css");
    res.sendFile(path.resolve(__dirname, "./dist/css/serveces.css"));
});
app.get("/dist/js/index.js", (req, res) => {
    res.setHeader("Content-type", "application/javascript");
    res.sendFile(path.resolve(__dirname, "./dist/js/index.js"));
});
app.get("/dist/js/application.js", (req, res) => {
    res.setHeader("Content-type", "application/javascript");
    res.sendFile(path.resolve(__dirname, "./dist/js/application.js"));
});
app.get("/dist/js/serveces.js", (req, res) => {
    res.setHeader("Content-type", "application/javascript");
    res.sendFile(path.resolve(__dirname, "./dist/js/serveces.js"));
});

app.post("/api/sendEmail", jsonParser, async function (req, res) {
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "metlov.nm@gmail.com",
                pass: "ptcl huvs phea uoqq",
            },
        });

        const { recipient, theme, text } = req.body;
        await transporter.sendMail({
            from: "metlov.nm@gmail.com",
            to: recipient,
            subject: theme,
            text: text,
        });

        return res.status(200).send({
            message: `Ваша заявка успешно отправлена!`,
        });
    } catch (e) {
        return res.status(500).send({
            status: 500,
            message: e.message,
        });
    }
});

app.listen(PORT, () => {
    console.log(`linked by http://localhost:${PORT}`);
});
