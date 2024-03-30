const { Router } = require("express");
const router = Router();

const {
  pxln,
  gxln,
} = require("../../controller/controllerPaginas/cXloveNueva.js");
const { verifyJWT } = require("../../helper/jwtHelper.js");

router.post("/", verifyJWT, async (req, res) => {
  const coxln = req.body.coxln;
  try {
    const ncoxln = await pxln(coxln);
    if (ncoxln[0]) {
      return res.status(200).json(ncoxln);
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
    const coxln = await gxln();
    if (coxln[0]) {
      return res.status(200).json(coxln);
    } else {
      return res.status(404).json({ error: "No hay registros para mostrar" });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
