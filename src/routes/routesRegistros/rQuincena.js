const { Router } = require("express");
const router = Router();

const {
  postQuincena,
  getAllQuincena,
  getQuincenaById,
  updateQuincena,
  deleteQuincena,
} = require("../../controller/controllerRegistros/cQuincena.js");

router.post("/", async (req, res) => {
  const quincena = req.body;
  try {
    const nQuincena = await postQuincena(quincena);
    return res.status(200).json(nQuincena);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const allQuincena = await getAllQuincena();
    return res.status(200).json(allQuincena);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const quincenaId = await getQuincenaById(id);
    return res.status(200).json(quincenaId);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const nQuincena = req.body.nQuincena;
  try {
    const editQuincena = await updateQuincena(id, nQuincena);
    return res.status(200).json(editQuincena);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const quincena = await deleteQuincena(id);
    if (quincena.error) {
      return res.status(404).json(quincena);
    }
    return res.status(200).json(quincena);
  } catch (error) {
    return res.status(500).send({ error: "Error al eliminar la quincena" });
  }
});

module.exports = router;
