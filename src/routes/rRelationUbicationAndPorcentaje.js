const { Router } = require("express");
const router = Router();

const {
  relationUbicationAndPorcentaje,
} = require("../controller/cRelationUbicationAndPorcentaje.js");
const { verifyJWT } = require("../helper/jwtHelper.js");

router.post("/", verifyJWT, async (req, res) => {
  const input = req.body;
  try {
    const relation = await relationUbicationAndPorcentaje(input);
    return res.status(200).json(relation);
  } catch (error) {
    return res.status(500).json({ error: "Error al crear las relaciones" });
  }
});

module.exports = router;
