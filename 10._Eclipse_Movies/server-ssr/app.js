import "dotenv/config";

import express from "express";
const app = express();

app.use(express.json());

import path from "path"
app.use(express.static(path.resolve("../client/dist")));

import cors from "cors";
app.use(cors({
  credentials: true,
  origin: true
}));

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

import livereload from 'livereload';
import connectLivereload from 'connect-livereload';

const liveReloadServer = livereload.createServer();
liveReloadServer.watch("../client/dist");
liveReloadServer.server.once("connection", () => {
setTimeout(() => {
    liveReloadServer.refresh("/");
}, 500);
});

app.use(connectLivereload());

import session from "express-session";

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));


import moviesRouters from "./routers/moviesRouter.js";
app.use(moviesRouters);

import customersRouter from "./routers/customersRouter.js";
app.use(customersRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve("../client/dist/index.html"));
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is runing on port", 8080));
