const { Router } = require("express");
const router = Router();

const { pdi, gdi } = require("../../controller/controllerPaginas/cDirty.js");
const { verifyJWT } = require("../../helper/jwtHelper.js");

router.post("/", verifyJWT, async (req, res) => {
  const codi = req.body.codi;
  try {
    const ncodi = await pdi(codi);
    if (ncodi[0]) {
      return res.status(200).json(ncodi);
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
    const codi = await gdi();
    if (codi[0]) {
      return res.status(200).json(codi);
    } else {
      return res
        .status(404)
        .json({ error: "No se encontraros registros para mostrar" });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
