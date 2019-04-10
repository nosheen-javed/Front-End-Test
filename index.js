"use strict";

const express = require("express");
const model = require("./resources/model.json");
const app = express();
var sassMiddleware = require("node-sass-middleware");
const path = require("path");
const router = express.Router();

app.locals.data = require("./resources/model.json");

app.set("view engine", "ejs");

app.get("/model", (req, res) => {
  res.set("Content-Type", "application/json").send(model);
});

app.get("/", function(req, res) {
  res.render("index");
  //__dirname : It will resolve to your project folder.
});

app.get("/locationdetail/:id", function(req, res) {
  model.forEach(function(item) {
    if (item.cityId == req.params.id) {
      console.log(item.cityId);
      //  chartData(item);
      // res.send("Id is" + req.params.id);
      res.render("locationdetail", { object: item });
    }
  });

  //__dirname : It will resolve to your project folder.
});

app.use(
  sassMiddleware({
    src: path.join(__dirname, "public/sass"),
    dest: path.join(__dirname, "public/css"),
    debug: true,
    indentedSyntax: true,
    outputStyle: "compressed",
    prefix: "/css"
  })
);

app.use(express.static(path.join(__dirname, "public")));
app.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist/"));

app.use(
  "/bootstrap",
  express.static(__dirname + "/node_modules/bootstrap/dist/")
);
app.use("/chartjs", express.static(__dirname + "/node_modules/chart.js/dist/"));

app.use("/", router);
app.listen(3000, () =>
  console.log(
    "OWLR front-end test server running on port 3000. Try http://localhost:3000/model"
  )
);
function chartData(data) {
  var dataset = data;
  renderChart(dataset);
}
