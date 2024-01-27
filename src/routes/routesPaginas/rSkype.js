const { Router } = require("express");
const router = Router();

const { psk, gsk } = require("../../controller/controllerPaginas/cSkype.js");

router.post("/", async (req, res) => {
  const cosk = req.body.cosk;
  try {
    const ncosk = await psk(cosk);
    if (ncosk[0]) {
      return res.status(200).json(ncosk);
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
    const cosk = await gsk();
    if (cosk[0]) {
      return res.status(200).json(cosk);
    } else {
      return res.status(404).json({ error: "No hay registros para mostrar" });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
