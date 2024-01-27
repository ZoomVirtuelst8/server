const { Producto } = require("../../db.js");

const postProducto = async (producto) => {
  try {
    const nProducto = await Producto.findOrCreate({
      where: {
        nombre: producto.nombre,
      },
      defaults: {
        descripcion: producto.descripcion,
        imagen: producto.imagen,
      },
    });
    return nProducto;
  } catch (error) {
    throw new Error(
      "Lo sentimos no se pudo crear el producto en la base de datos"
    );
  }
};

const getAllProductos = async () => {
  try {
    const allProductos = await Producto.findAll();

    return allProductos;
  } catch (error) {
    throw new Error("Error: no hay registros para mostrar");
  }
};

const getProductoById = async (id) => {
  try {
    const producto = await Producto.findByPk(id);
    return producto;
  } catch (error) {
    throw Error("Error no hay registros para mostar.");
  }
};

const updateProducto = async (id, editProduct) => {
  try {
    const editProducto = await Producto.findByPk(id);
    if (!editProducto) {
      return { error: "No se encontro el producto." };
    }
    await Producto.update(
      {
        nombre: editProduct.nombre,
        descripcion: editProduct.descripcion,
        imagen: editProduct.imagen,
      },
      { where: { id } }
    );
    const updateProducto = await Producto.findByPk(id);
    return updateProducto;
  } catch (error) {
    throw Error("No pudimos actualizar el producto.");
  }
};

const deleteProducto = async (id) => {
  try {
    const deleteProducto = await Producto.findByPk(id);
    if (!deleteProducto) {
      return { error: "Lo sentimos no encontramos el producto." };
    }
    await deleteProducto.destroy();
    return { mensaje: "El Producto fue eliminado correctamente" };
  } catch (error) {
    throw Error("Error no se pudo eliminar el producto.");
  }
};

module.exports = {
  postProducto,
  getAllProductos,
  getProductoById,
  updateProducto,
  deleteProducto,
};
