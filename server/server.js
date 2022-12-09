const express = require("express");
const dotenv=require("dotenv")

const cors = require("cors");
const weatherRoutes = require("./routes/weatherRoutes");
const weatherRoutess = require("./controllers/weatherControllers");

// const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");

 dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running");
});

// app.get("/api/weather", (req, res) => {
//   res.send("API is running");
// });

// app.get("/api/weather", weatherRoutes);
// app.use(notFound);
// app.use(errorHandler);

app.use('/api/weather', weatherRoutess);
// app.use(notFound);
// app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in mode on port ${PORT}`)
);
