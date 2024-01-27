const { Prestamos, Quincena } = require("../../db.js");

const postPrestamos = async ({ prestamo, userId, quincenaId }) => {
  try {
    const quincena = await Quincena.findOne({
      where: { id: quincenaId },
    });

    const newPrestamo = await Prestamos.create({ cantidad: prestamo, userId });

    newPrestamo.setQ_prestamos(quincena);
    return newPrestamo;
  } catch (error) {

    throw new Error("No se pudo crear el registro.");
  }
};
const getAllPrestamos = async () => {
  try {
    const prestamos = await Prestamos.findAll();
    return prestamos;
  } catch (error) {
    throw new Error("No hay registros para mostrar");
  }
};

const getPrestamoById = async (id) => {
  try {
    const getPrestamo = await Prestamos.findByPk(id);
    return getPrestamo;
  } catch (error) {
    throw Error("Error no se encontro el prestamo.");
  }
};

const updatePrestamos = async (id, nPrestamo) => {
  try {
    const editPrestamo = await Prestamos.findByPk(id);
    if (!editPrestamo) {
      return { error: "no se encontro el prestamo." };
    }
    await Prestamos.update({ cantidad: nPrestamo.cantidad }, { where: { id } });
    const updatePrestamos = await Prestamos.findByPk(id);
    return updatePrestamos;
  } catch (error) {
    throw new Error("Error no pudimos actualizar el prestamo.");
  }
};

const deletePrestamo = async (id) => {
  try {
    const deletePrestamo = await Prestamos.findByPk(id);
    if (!deletePrestamo) {
      return { error: "Lo sentimos no encontramos el prestamo." };
    }
    await deletePrestamo.destroy();
    return { mensaje: "El prestamo fue eliminado correctamente" };
  } catch (error) {
    throw Error("Error no se puedo eliminar el prestamo.");
  }
};
module.exports = {
  postPrestamos,
  getAllPrestamos,
  updatePrestamos,
  deletePrestamo,
  getPrestamoById,
};
