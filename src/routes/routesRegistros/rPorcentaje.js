const { Router } = require("express");
const router = Router();

const {
  postPorcentaje,
  getAllPorcentaje,
  getPorcentajeById,
  updatePorcentaje,
  deletePorcentaje,
} = require("../../controller/controllerRegistros/cPorcentaje.js");

router.post("/", async (req, res) => {
  const porcentajes = req.body;
  try {
    const newPorcentaje = await postPorcentaje(porcentajes);
    return res.status(200).json(newPorcentaje);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const allPorcentaje = await getAllPorcentaje();
    return res.status(200).json(allPorcentaje);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const porcentaje = await getPorcentajeById(id);
    return res.status(200).json(porcentaje);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const nPorcentaje = req.body.porcentajes;
  try {
    const editPorcentaje = await updatePorcentaje(id, nPorcentaje);
    return res.status(200).json(editPorcentaje);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletePorcentaje = await deletePorcentaje(id);
    if (!deletePorcentaje.error) {
      return res.status(404).json(deletePorcentaje);
    }
    return res.status(200).json(deletePorcentaje);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
