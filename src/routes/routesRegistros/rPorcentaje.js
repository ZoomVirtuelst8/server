const { Router } = require("express");
const router = Router();

const {
  postPorcentaje,
  getAllPorcentaje,
  getPorcentajeById,
  updatePorcentaje,
  deletePorcentaje,
} = require("../../controller/controllerRegistros/cPorcentaje.js");
const { verifyJWT } = require("../../helper/jwtHelper.js");

router.post("/", verifyJWT, async (req, res) => {
  const porcentajes = req.body;
  try {
    const newPorcentaje = await postPorcentaje(porcentajes);
    return res.status(200).json(newPorcentaje);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", verifyJWT, async (req, res) => {
  try {
    const allPorcentaje = await getAllPorcentaje();
    return res.status(200).json(allPorcentaje);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/:id", verifyJWT, async (req, res) => {
  const { id } = req.params;
  try {
    const porcentaje = await getPorcentajeById(id);
    return res.status(200).json(porcentaje);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.put("/:id", verifyJWT, async (req, res) => {
  const { id } = req.params;
  const nPorcentaje = req.body.porcentajes;
  try {
    const editPorcentaje = await updatePorcentaje(id, nPorcentaje);
    return res.status(200).json(editPorcentaje);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/delete/:id", verifyJWT, async (req, res) => {
  const { id } = req.params;
  try {
    const deletesPorcentaje = await deletePorcentaje(id);
    if (!deletesPorcentaje.error) {
      return res.status(404).json(deletesPorcentaje);
    }
    return res.status(200).json(deletesPorcentaje);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
