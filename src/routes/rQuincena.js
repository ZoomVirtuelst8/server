const { Router } = require("express");
const router = Router();

const {
  postQuincena,
  getAllQuincena,
  getQuincenaById,
  updateQuincena,
  deleteQuincena,
} = require("../controller/cQuincena.js");
const { verifyJWT } = require("../helper/jwtHelper.js");

router.post("/", verifyJWT, async (req, res) => {
  try {
    const quincena = req.body;
    console.log(quincena);
    const nQuincena = await postQuincena(quincena);
    return res.status(200).json(nQuincena);
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
});

router.get("/", verifyJWT, async (req, res) => {
  try {
    const allQuincena = await getAllQuincena();
    return res.status(200).json(allQuincena);
  } catch (error) {
    // console.log(error)
    return res.status(500).send(error.message);
  }
});

router.get("/:id", verifyJWT, async (req, res) => {
  const { id } = req.params;
  try {
    const quincenaId = await getQuincenaById(id);
    return res.status(200).json(quincenaId);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.put("/:id", verifyJWT, async (req, res) => {
  const { id } = req.params;
  const nQuincena = req.body.nQuincena;
  try {
    const editQuincena = await updateQuincena(id, nQuincena);
    return res.status(200).json(editQuincena);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/delete/:id", verifyJWT, async (req, res) => {
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
