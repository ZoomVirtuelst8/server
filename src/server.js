const express = require("express");
require("dotenv").config();
const router = require("./routes/index.js");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const server = express();
const corsConfig = {
  origin: "*",//"process.env.FRONT_URL",
  credential: true, // Habilita el envío de cookies y encabezados de autenticación
  methods: ["GET", "POST", "PUT", "DELETE"],
};

server.use(cors(corsConfig));
server.options("", cors(corsConfig));
server.use(express.json());
server.use(morgan("dev"));
server.use(helmet());

server.use(router);

module.exports = server;
