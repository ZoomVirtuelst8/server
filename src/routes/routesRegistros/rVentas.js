const { Router } = require("express");
const router = Router();

const {
  postVentas,
  getAllVentas,
  getVentaById,
  updateVentas,
  deleteVenta,
} = require("../../controller/controllerRegistros/cVentas.js");
const { verifyJWT } = require("../../helper/jwtHelper.js");

router.post("/", verifyJWT, async (req, res) => {
  const venta = req.body;
  console.log(venta)
  try {
    const nVenta = await postVentas(venta);
    return res.status(200).json(nVenta);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", verifyJWT, async (req, res) => {
  try {
    const allVentas = await getAllVentas();
    return res.status(200).json(allVentas);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/:id", verifyJWT, async (req, res) => {
  const { id } = req.params;
  try {
    const venta = await getVentaById(id);
    return res.status(200).json(venta);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.put("/:id", verifyJWT, async (req, res) => {
  const { id } = req.params;
  const nVenta = req.body.nVenta;
  try {
    const editVenta = await updateVentas(id, nVenta);
    return res.status(200).json(editVenta);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/delete/:id", verifyJWT, async (req, res) => {
  const { id } = req.params;
  try {
    const venta = await deleteVenta(id);
    if (venta.error) {
      return res.status(404).json(venta);
    }
    return res.status(200).json(venta);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
