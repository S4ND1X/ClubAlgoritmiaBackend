// Importing express
const express = require("express");
//Importing connection to DB
const connectDB = require("./config/db");

const cors = require("cors");

//Create server
const app = express();

//App port, from enviroment (Heroku) or 400 0as default, heroku takes the process.env
const port = process.env.PORT || 4000;

// Define what happens on main page
app.get("/api", (req, res) => {
  res.send(
    `<h1 style="text-align:center; margin-top: 1em;">Welcome to Club Algoritmia GDA API</h1>`
  );
});

//Enable cors and allow only one origin
app.use(cors({ origin: process.env.ORIGIN_1 }));
//Enable express
app.use(express.json({ extended: true }));

//Import route to use when endpoint is /api/workshops (Middleware)
app.use("/api/workshops", require("./routes/workshopsRoute"));

//Run server and start listening port, 0.0.0.0 is for heroku host
app.listen(port, "0.0.0.0", () => {
  console.log("====================================");
  console.log(`Running on - ${port}`);
  console.log("====================================");
});

//Calling config and connection of DB
connectDB();
