import express from 'express';
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import AuthRoute from "./Routes/AuthRoute.js"
import UserRoute from "./Routes/UserRoute.js"
import PostRoute from "./Routes/PostRoute.js"

const port = process.env.PORT || 2000;

const app = express();

//Middleware
app.use(bodyParser.json({
    limit: "30mb",
    extended: "true"
}));

app.use(bodyParser.urlencoded({
    limit: "30mb",
    extended: "true"
}));

dotenv.config()

//Database Connection
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection Succesful");
}).catch(() => {
    console.log("No connection")
});


//Usage of routes
app.use("/auth", AuthRoute)
app.use("/user", UserRoute)
app.use("/post", PostRoute)


app.listen(port, () => {
    console.log(`App is running at http://localhost:${port} `);
})

