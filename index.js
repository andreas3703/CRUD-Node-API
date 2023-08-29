require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const errorMiddleware = require("./middleware/errorMiddleware");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;
const FRONTEND = process.env.FRONTEND;

const corsOptions = {
  origin: [FRONTEND, "http://example.com"],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes

app.use("/api/products", productRoute);
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Hello node js");
});

app.get("/blog", (req, res) => {
  res.send("Hello blog");
});

app.use(errorMiddleware);

mongoose.set("strictQuery", false);
mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("connect to mongodb");
    app.listen(PORT, () => {
      console.log(`Backend is running on http://localhost:3000 Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
