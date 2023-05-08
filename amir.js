const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
// Mongoose connection
mongoose.connect("mongodb://mongo-svc:27017/my-db", {
  /* ... */
});
const NumberSchema = new mongoose.Schema({
  num: Number,
});
const Number = mongoose.model("Number", NumberSchema);

// Enable CORS for all routes
app.use(
  cors({
    origin: "http://127.0.0.1:3041", // Replace this with the allowed origin
  })
);

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/add", (req, res) => {
  // ...
  const number = new Number({ num: result });
  number.save((err) => {
    if (err) res.send(err);
    res.send(result.toString());
  });
});

app.get("/subtract", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const result = num1 - num2;
  res.send(result.toString());
});

app.get("/multiply", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const result = num1 * num2;
  res.send(result.toString());
});

app.get("/divide", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  if (num2 === 0) {
    res.status(400).send("Cannot divide by zero");
  } else {
    const result = num1 / num2;
    res.send(result.toString());
  }
});
number.save((err) => {
  if (err) res.send(err);
  // ...
});
app.listen(3041, () => {
  console.log("Server is running on port 3041");
});
