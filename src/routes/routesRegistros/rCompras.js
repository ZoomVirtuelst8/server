const { Router } = require("express");
const router = Router();

const {
  postCompras,
  getAllCompras,
  getCompraById,
  deleteCompra,
  updateCompras,
} = require("../../controller/controllerRegistros/cCompras.js");
const { verifyJWT } = require("../../helper/jwtHelper.js");

router.post("/", verifyJWT, async (req, res) => {
  const compra = req.body;
  try {
    const nCompra = await postCompras(compra);
    return res.status(200).json(nCompra);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", verifyJWT, async (req, res) => {
  try {
    const getCompras = await getAllCompras();
    return res.status(200).json(getCompras);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/:id", verifyJWT, async (req, res) => {
  const { id } = req.params;
  try {
    const getCompras = await getCompraById(id);
    return res.status(200).json(getCompras);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});


router.put("/:id", verifyJWT, async (req, res) => {
  const { id } = req.params;
  const nCompra = req.body.nCompra;
  try {
    const editCompra = await updateCompras(id, nCompra);
    res.status(200).json(editCompra);
  } catch (error) {
    res.status(500).json({ error: "No pudimos actualizar la compra." });
  }
});

router.delete("/delete/:id", verifyJWT, async (req, res) => {
  const { id } = req.params;
  try {
    const compra = await deleteCompra(id);
    if (compra.error) {
      res.status(404).json(compra);
    }
    return res.status(200).json(compra);
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la compra." });
  }
});

module.exports = router;
