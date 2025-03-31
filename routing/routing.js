const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

const routes = {
    "home": "home.html",
    "chi-siamo": "chi-siamo.html",
    "cosa-facciamo": "cosa-facciamo.html",
    "contatti": "contatti.html"
};

app.get("/:page", (req, res) => {
    const page = req.params.page;
    const file = routes[page] || routes["home"];
    res.sendFile(__dirname + "/public/" + file);
});

app.post("/dati", (req, res) => {
    const data = req.body;
    console.log("Dati ricevuti:", data);
    res.json({ message: "Dati ricevuti con successo!", data });
});

app.listen(port, () => {
    console.log(`Server in esecuzione su http://localhost:${port}`);
});
