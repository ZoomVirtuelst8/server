const { Router } = require("express");
const router = Router();

const {
  postMoneda,
  getAllMoneda,
} = require("../../controller/controllerRegistros/cMoneda.js");

router.post("/", async (req, res) => {
  const moneda = req.body;
  try {
    const nMoneda = await postMoneda(moneda);
    return res.status(200).json(nMoneda);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const moneda = await getAllMoneda();
    return res.status(200).json(moneda);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
