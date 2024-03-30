const { Router } = require("express");
const router = Router();

const { pil, gil } = require("../../controller/controllerPaginas/cIsLive.js");
const { verifyJWT } = require("../../helper/jwtHelper.js");

router.post("/", verifyJWT, async (req, res) => {
  const coil = req.body.coil;
  try {
    const ncoil = await pil(coil);
    if (ncoil[0]) {
      return res.status(200).json(ncoil);
    } else {
      return res
        .status(404)
        .json({ error: "Los registros ya fueron realizados" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Error al guardar los registros: " });
  }
});

router.get("/", verifyJWT, async (req, res) => {
  try {
    const coil = await gil();
    if (coil[0]) {
      return res.status(200).json(coil);
    } else {
      return res
        .status(404)
        .json({ error: "no se encontraros registros para mostrar" });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
