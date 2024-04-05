const { Router } = require("express");
const router = Router();

const { pse, gse } = require("../controller/cSender.js");
const { verifyJWT } = require("../helper/jwtHelper.js");

router.post("/", verifyJWT, async (req, res) => {
  const cose = req.body.cose;
  try {
    const ncose = await pse(cose);
    if (ncose[0]) {
      return res.status(200).json(ncose);
    } else {
      return res
        .status(404)
        .json({ error: "Lo sentimos los registros ya fueron realizados." });
    }
  } catch (error) {
    return res.status(500).json({ error: "Error al guardar los registros: " });
  }
});

router.get("/", verifyJWT, async (req, res) => {
  try {
    const cose = await gse();
    if (cose[0]) {
      return res.status(200).json(cose);
    } else {
      return res
        .status(404)
        .json({ error: "Lo siento no hay resgistros para mostrar." });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
