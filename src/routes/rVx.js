const { Router } = require("express");
const router = Router();

const { pvx, gvx } = require("../controller/cVx.js");
const { verifyJWT } = require("../helper/jwtHelper.js");

router.post("/", verifyJWT, async (req, res) => {
  const covx = req.body.covx;
  try {
    const ncovx = await pvx(covx);
    if (ncovx[0]) {
      return res.status(200).json(ncovx);
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
    const covx = await gvx();
    if (covx[0]) {
      return res.status(200).json(covx);
    } else {
      return res.status(404).json({ error: "No hay registros para mostrar" });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
