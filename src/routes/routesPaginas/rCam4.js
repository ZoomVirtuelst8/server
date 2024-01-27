const { Router } = require("express");
const router = Router();

const { pca, gca } = require("../../controller/controllerPaginas/cCam4.js");

router.post("/", async (req, res) => {
  const coca = req.body.coca;
  try {
    const ncoca = await pca(coca);
    if (ncoca[0]) {
      return res.status(200).json(ncoca);
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
    const coca = await gca();
    if (coca[0]) {
      return res.status(200).json(coca);
    } else {
      return res.status(404).json({ error: "No se encontraron registros" });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
