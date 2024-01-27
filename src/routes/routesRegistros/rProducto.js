const { Router } = require("express");
const router = Router();

const {
  postProducto,
  getAllProductos,
  getProductoById,
  updateProducto,
  deleteProducto,
} = require("../../controller/controllerRegistros/cProductos.js");

router.post("/", async (req, res) => {
  const producto = req.body;
  try {
    const nProducto = await postProducto(producto);
    if (nProducto[0]) {
      return res.status(200).json(nProducto);
    } else {
      return res.status(404).json({ error: "Ya se registro ese producto" });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const productos = await getAllProductos();
    if (productos) {
      return res.status(200).json(productos);
    } else {
      return res.status(404).json({ error: "No hay registros para mostrar" });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const producto = await getProductoById(id);
    return res.status(200).json(producto);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const editProduct = req.body;
  try {
    const editProducto = await updateProducto(id, editProduct);
    return res.status(200).json(editProducto);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const producto = await deleteProducto(id);
    if (producto.error) {
      return res.status(404).json(producto);
    }
    return res.status(200).json(producto);
  } catch (error) {
    return res.status(500).send({ error: "Error al eliminar el producto." });
  }
});

module.exports = router;
