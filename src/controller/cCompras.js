const { Compras, Producto } = require("../db.js");

const postCompras = async (compra) => {
  try {
    const productoId = await Producto.findOne({
      where: { nombre: compra.producto },
    });

    if (!productoId) {
      throw Error("No se encontro el producto buscado");
    }
    const nCompra = await Compras.create({
      cantidad: compra.cantidad,
      precioCompra: compra.precioCompra,
      precioVenta: compra.precioVenta,
      precioVentaDiferido: compra.precioDiferido,
    });

    await nCompra.setCompra(productoId);

    return nCompra;
  } catch (error) {
    throw new Error("Lo sentimos no pudimos crear la compra");
  }
};

const getAllCompras = async () => {
  try {
    const allCompras = await Compras.findAll();
    // allCompras.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    return allCompras;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar");
  }
};

const getCompraById = async (id) => {
  try {
    const getCompra = await Compras.findByPk(id);
    return getCompra;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar");
  }
};

const updateCompras = async (id, nCompra) => {
  try {
    const editCompra = await Compras.findByPk(id);
    if (!editCompra) {
      return { error: "no se encontro la compra." };
    }
    await Compras.update(nCompra);
    const updateCompras = await Compras.findByPk(id);
    return updateCompras;
  } catch (error) {
    throw new Error("Error no pudimos actualizar la compra.");
  }
};

const deleteCompra = async (id) => {
  try {
    const deleteCompra = await Compras.findByPk(id);
    if (!deleteCompra) {
      return { error: "Lo sentimos no encontramos la compra." };
    }
    await deleteCompra.destroy();
    return { mensaje: "La compra fue eliminada correctamente" };
  } catch (error) {
    throw Error("Error no se puedo eliminar la compra.");
  }
};

module.exports = {
  postCompras,
  getAllCompras,
  getCompraById,
  updateCompras,
  deleteCompra,
};
