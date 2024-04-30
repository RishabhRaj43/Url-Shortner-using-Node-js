const express = require("express");
const { connectMongo } = require("./connection");
const urlRoute = require("./routes/user");

const app = express();
const port = 8000;

app.use(express.json());

connectMongo("mongodb://localhost:27017/shortId")
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

app.use("/", urlRoute);
// app.use('/',connectMongo)

app.listen(port);
