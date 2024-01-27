const { Router } = require("express");
const router = Router();

const {
  pst,
  gst,
} = require("../../controller/controllerPaginas/cStripchat.js");

router.post("/", async (req, res) => {
  const cost = req.body.cost;
  try {
    const ncost = await pst(cost);
    if (ncost[0]) {
      return res.status(200).json(ncost);
    } else {
      return res
        .status(404)
        .json({ error: "Lo sentimos los registros ya fueron realizados" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Error al guardar los registros: " });
  }
});

router.get("/", async (req, res) => {
  try {
    const cost = await gst();
    if (cost[0]) {
      return res.status(200).json(cost);
    } else {
      return res.status(404).json({ error: "No hay registros para mostrar" });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
