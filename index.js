// Importing express
const express = require("express");
//Importing connection to DB
const connectDB = require("./config/db");

const cors = require("cors");

//Create server
const app = express();

//App port, from enviroment or 400 as default, heroku takes the process.env
const port = process.env.port || 4000;

// Define what happens on main page
app.get("/api", (req, res) => {
  res.send(
    `<h1 style="text-align:center; margin-top: 1em;">Welcome to Club Algoritmia GDA API</h1>`
  );
});

const allowedOrigins = [process.env.ORIGIN_1, process.env.ORIGIN_2];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin
      // (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        let msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);
//Enable express
app.use(express.json({ extended: true }));

//Import route to use when endpoint is /api/workshops (Middleware)
app.use("/api/workshops", require("./routes/workshopsRoute"));

//Run server ans start listening port
app.listen(port, "0.0.0.0", () => {
  console.log("====================================");
  console.log(`Running on ${port}`);
  console.log("====================================");
});

//Calling config and connection of DB
connectDB();
