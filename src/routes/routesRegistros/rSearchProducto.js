const { Router } = require("express");
const router = Router();

const { getProductoPrecioAndCantidad } = require("../../controller/controllerRegistros/cSearchProducto.js")

router.get("/", async (req, res) => {
try {
const producto = await getProductoPrecioAndCantidad();
return res.status(200).json(producto);
} catch (error) {
return res.status(500).send(error.message);
};
});

module.exports = router