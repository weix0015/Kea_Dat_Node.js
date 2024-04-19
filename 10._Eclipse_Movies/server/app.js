import "dotenv/config";

import express from "express";
const app = express();

app.use(express.json());

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

const PORT = 8080;
app.listen(PORT, () => console.log("Server is runing on port", 8080));
