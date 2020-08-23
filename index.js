// Importing express
const express = require("express");
//Importing connection to DB
const connectDB = require("./config/db");

const cors = require("cors");

//Create server
const app = express();

//App port, from enviroment or 400 as default, heroku takes the process.env
const PORT = process.env.PORT || 4000;

// Define what happens on main page
app.get("/api", (req, res) => {
  res.send(
    `<h1 style="text-align:center; margin-top: 1em;">Welcome to Club Algoritmia GDA API</h1>`
  );
});

app.use(cors());
//Enable express
app.use(express.json({ extended: true }));

//Import route to use when endpoint is /api/workshops (Middleware)
app.use("/api/workshops", require("./routes/workshopsRoute"));

//Run server ans start listening port
app.listen(PORT, () => {
  console.log("====================================");
  console.log(`Running on ${PORT}`);
  console.log("====================================");
});

//Calling config and connection of DB
connectDB();
