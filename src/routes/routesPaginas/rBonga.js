const { Router } = require("express");
const router = Router();

const {
  pbo,
  gbo,
  deleteBonga,
} = require("../../controller/controllerPaginas/cBonga.js");
const { verifyJWT } = require("../../helper/jwtHelper.js");

router.post("/", verifyJWT, async (req, res) => {
  const cobo = req.body.cobo;
  try {
    const ncobo = await pbo(cobo);
    if (ncobo[0]) {
      return res.status(200).json(ncobo);
    } else {
      return res
        .status(404)
        .json({ error: "Lo sentimos los registros ya fueron hechos." });
    }
  } catch (error) {
    return res.status(500).json({ error: "Error al guardar los registros: " });
  }
});

router.get("/", verifyJWT, async (req, res) => {
  try {
    const cobo = await gbo();
    if (cobo[0]) {
      return res.status(200).json(cobo);
    } else {
      return res.status(404).json({ error: "No hay resgistros para mostrar." });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/delete/:id", verifyJWT, async (req, res) => {
  const { id } = req.params;
  try {
    const deleteBongas = await deleteBonga(id);
    return res.status(200).json(deleteBongas);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
