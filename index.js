const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const categorias = require("./routes/categorias");
const publicacoes = require("./routes/publicacoes");
const home = require("./routes/home");

app.set("view engine", "ejs"); // ejs: HTML turbinado, mas ainda é HTML; jade: deixa de ser HTML
app.use(bodyParser.urlencoded());

const port = process.env.port || 3000;

// **** Get teste.json ****
app.get("/", async (request, response) => {
  response.render("index");
});

app.use("/categorias", categorias);
app.use("/publicacoes", publicacoes);
app.use("/home", home);

// ouvir uma porta de entrada
app.listen(port, (err) => {
  if (err) {
    console.log("Error");
  } else {
    console.log("Como-fazer server is running on port ", port);
  }
});
