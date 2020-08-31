import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import config from "./config";
import userRouter from "./routes/userRoute";
import productRouter from "./routes/productRoutes";
import cors from "cors";

const PORT = 4000;
const app = express();
app.use(bodyParser.json());

app.use(cors());

dotenv.config();

const mongoDbUrl = config.mongoDbUrl;

mongoose
    .connect(mongoDbUrl, {
        useCreateIndex     : true,
        useUnifiedTopology : true,
        useNewUrlParser    : true
    })
    .catch((err) => console.log(err));

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.listen(PORT, () => {
    console.log("Server now listening on port : " + PORT);
});
