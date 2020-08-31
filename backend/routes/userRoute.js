import express, { request, response } from "express";
import User from "../models/userModel";
import jwt from "jsonwebtoken";
import { isAuth } from "../utils";
import jwtCheck from "../jwtCheck";

const userRouter = express.Router();

userRouter.post("/signin", (request, response) => {
    User.findOne({
        email    : request.body.email,
        password : request.body.password
    })
        .then((data) => {
            jwt.sign(
                { id: data.id, isAdmin: data.isAdmin, name: data.name },
                "secretKey",
                { expiresIn: 86000 },
                (err, token) => {
                    if (err) throw err;
                    response.send({ token, name : data.name });
                }
            );
        })
        .catch((err) => response.send(err));
});

userRouter.post("/register", (request, response) => {
    const user = new User({
        name     : request.body.name,
        email    : request.body.email,
        password : request.body.password
    });

    user
        .save()
        .then((data) => {
            jwt.sign({ id: data.id, name: data.name }, "secretKey", { expiresIn: 86000 }, (err, token) => {
                if (err) throw err;
                response.send(token);
            });
        })
        .catch((err) => response.send({ msg: err }));
});

userRouter.get("/createadmin", (request, response) => {
    const user = new User({
        name     : "wisdom",
        email    : "freezwiz@hi2.in",
        password : "password",
        isAdmin  : true
    });

    user
        .save()
        .then((data) => response.send("Admin " + data.name + " created"))
        .catch((err) => response.send({ msg: err }));
});

export default userRouter;
