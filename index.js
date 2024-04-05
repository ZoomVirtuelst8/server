// const axios = require("axios");
// const server = require("./src/server.js");
const PORT = 3001;
const express = require("express");
const { conn } = require("./src/db.js");
const router = require("./src/routes/index.js");
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const server = express();
const corsConfig = {
  origin: "*",
  credential: true, // Habilita el envío de cookies y encabezados de autenticación
  methods: ["GET", "POST", "PUT", "DELETE"],
};

server.use(cors(corsConfig));
server.options("", cors(corsConfig));
server.use(express.json());
server.use(morgan("dev"));
server.use(helmet());

server.use(router);
// ni asi funciona
conn
  // .sync({ force: false })
  .then(async () => {
    server.listen(PORT || 3001, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));

//____________________________________________________________________
//      ,----------------,              ,---------,
//         ,-----------------------,          ,"        ,"|
//       ,"                      ,"|        ,"        ,"  |
//      +-----------------------+  |      ,"        ,"    |
//      |  .-----------------.  |  |     +---------+      |
//      |  |                 |  |  |     | -==----'|      |
//      |  |  I LOVE DOS!    |  |  |     |         |      |
//      |  |  Bad command or |  |  |/----|`---=    |      |
//      |  |  C:\>_          |  |  |   ,/|==== ooo |      ;
//      |  |                 |  |  |  // |(((( [33]|    ,"
//      |  `-----------------'  |," .;'| |((((     |  ,"
//      +-----------------------+  ;;  | |         |,"
//         /_)______________(_/  //'   | +---------+
//    ___________________________/___  `,
//   /  oooooooooooooooo  .o.  oooo /,   \,"-----------
//  / ==ooooooooooooooo==.o.  ooo= //   ,`\--{)B     ,"
// /_==__==========__==_ooo__ooo=_/'   /___________,"
//
//                 .-~~~~~~~~~-._       _.-~~~~~~~~~-.
//             __.'              ~.   .~              `.__
//           .'//                  \./                  \\`.
//         .'//                     |                     \\`.
//       .'// .-~"""""""~~~~-._     |     _,-~~~~"""""""~-. \\`.
//     .'//.-"                 `-.  |  .-'                 "-.\\`.
//   .'//______.============-..   \ | /   ..-============.______\\`.
// .'______________________________\|/______________________________`.
