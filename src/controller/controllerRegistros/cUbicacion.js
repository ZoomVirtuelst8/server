const { Ubicacion } = require("../../db.js");

const postUbicacion = async (ubicacion) => {
  try {
    const ubication = await Ubicacion.findOrCreate({ where: { ubicacion } });
    return ubication;
  } catch (error) {
    throw new Error("Error no fue posible crear esa ubicacion.");
  }
};

const getAllUbicacion = async () => {
  try {
    const allUbicacion = await Ubicacion.findAll();
    allUbicacion.sort((a, b) => a.ubicacion - b.ubicacion);
    return allUbicacion;
  } catch (error) {
    throw new Error("Error no se encontraron registros para mostrar");
  }
};

const getUbicacionById = async (id) => {
  try {
    const ubicacionById = await Ubicacion.findByPk(id);
    return ubicacionById;
  } catch (error) {
    throw new Error(`Error no se encontro registro con ${id}`);
  }
};

const updateUbicacion = async (id, nUbicacion) => {
  try {
    const editUbicacion = await Ubicacion.findByPk(id);
    if (!editUbicacion) {
      return { error: "No se encontro la Ubicacion." };
    }
    await Ubicacion.update(nUbicacion);
    const updateUbicacion = await Ubicacion.findByPk(id);
    return updateUbicacion;
  } catch (error) {
    throw new Error("No se pudo actualizar la Ubicacion.");
  }
};

const deleteUbicacion = async (id) => {
  try {
    const deleteUbicacion = await Ubicacion.findByPk(id);
    if (!deleteUbicacion) {
      return { error: "Lo sentimos no encontramos la Ubicacion." };
    }
    await deleteUbicacion.destroy();
    return { mensaje: "La Ubicacion fue eliminada correctamente." };
  } catch (error) {
    throw new Error("Error no se pudo eliminar la Ubicacion.");
  }
};

module.exports = {
  postUbicacion,
  getAllUbicacion,
  getUbicacionById,
  updateUbicacion,
  deleteUbicacion,
};
