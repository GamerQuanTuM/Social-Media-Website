import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRoute.js";
import PostRoute from "./Routes/PostRoute.js";
import UploadRoute from "./Routes/UploadRoute.js";
import cors from "cors";

const port = process.env.PORT || 2000;

const app = express();
//To server images for public

app.use(express.static("public"));
app.use("/images", express.static("images"));

//Middleware
app.use(
  bodyParser.json({
    limit: "30mb",
    extended: "true",
  })
);

app.use(
  bodyParser.urlencoded({
    limit: "30mb",
    extended: "true",
  })
);

app.use(cors());
dotenv.config();

//Database Connection
mongoose
  .connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Succesful");
  })
  .catch(() => {
    console.log("No connection");
  });

//Usage of routes
app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/post", PostRoute);
app.use("/upload", UploadRoute);

app.listen(port, () => {
  console.log(`App is running at http://localhost:${port} `);
});
