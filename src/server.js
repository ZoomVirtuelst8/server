const express = require("express");
require("dotenv").config();
const router = require("./routes/index.js");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const server = express();

server.use(
  cors({
    origin: process.env.FRONT_URL,
    credentials: true, // Habilita el envío de cookies y encabezados de autenticación
  })
);

server.use(express.json());
server.use(morgan("dev"));
server.use(helmet());

server.use(router);

module.exports = server;
