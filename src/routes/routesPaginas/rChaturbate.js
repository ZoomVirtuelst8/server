const { Router } = require("express");
const router = Router();

const {
  pch,
  gch,
} = require("../../controller/controllerPaginas/cChaturbate.js");

router.post("/", async (req, res) => {
  const coch = req.body.coch;
  try {
    const ncoch = await pch(coch);
    if (ncoch[0]) {
      return res.status(200).json(ncoch);
    } else {
      return res
        .status(404)
        .json({ error: "Lo sentimos los registros ya fueron hechos." });
    }
  } catch (error) {
    return res.status(500).json({ error: "Error al guardar los registros: " });
  }
});

router.get("/", async (req, res) => {
  try {
    const coch = await gch();
    if (coch[0]) {
      return res.status(200).json(coch);
    } else {
      return res.status(405).json({ error: "No hay registros para mostrar" });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
