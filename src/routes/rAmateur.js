const { Router } = require("express");
const router = Router();

const { pam, gam } = require("../controller/cAmateur.js");
const { verifyJWT } = require("../helper/jwtHelper.js");

router.post("/", verifyJWT, async (req, res) => {
  const coam = req.body.coam;
  try {
    const ncoam = await pam(coam);
    if (ncoam[0]) {
      return res.status(200).json(ncoam);
    } else {
      return res
        .status(404)
        .json({ error: "Lo sentimos los registros ya fueron realizados" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Error al guardar los registros: " });
  }
});

router.get("/", verifyJWT, async (req, res) => {
  try {
    const coam = await gam();
    if (coam[0]) {
      return res.status(200).json(coam);
    } else {
      return res.status(404).json({ error: "No hay registros para mostrar" });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
