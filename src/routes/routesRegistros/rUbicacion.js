const { Router } = require("express");
const router = Router();

const {
  postUbicacion,
  getAllUbicacion,
  getUbicacionById,
  updateUbicacion,
  deleteUbicacion,
} = require("../../controller/controllerRegistros/cUbicacion.js");

router.post("/", async (req, res) => {
  const ubicacion = req.body.ubicacion;
  try {
    const newUbicacion = await postUbicacion(ubicacion);
    return res.status(200).json(newUbicacion);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const allUbicacion = await getAllUbicacion();
    return res.status(200).json(allUbicacion);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const ubicacionById = await getUbicacionById(id);
    return res.status(200).json(ubicacionById);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  const nUbicacion = req.body.nUbicacion;
  const { id } = req.params;
  try {
    const editUbicacion = await updateUbicacion(id, nUbicacion);
    return res.status(200).json(editUbicacion);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const ubicacion = await deleteUbicacion(id);
    if (ubicacion.error) {
      return res.status(404).json(ubicacion);
    }
    return res.status(200).json(ubicacion);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
