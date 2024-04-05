const { Porcentaje } = require("../db.js");

const postPorcentaje = async (porcentajes) => {
  const { nombre, inicial, final, meta } = porcentajes;
  try {
    const newPorcentaje = await Porcentaje.findOrCreate({
      where: {
        nombre: nombre,
      },
      defaults: {
        inicial: inicial,
        final: final,
        meta: meta,
      },
    });
    return newPorcentaje;
  } catch (error) {
    throw new Error("Error no se puedo crear el Porcentaje");
  }
};

const getAllPorcentaje = async () => {
  try {
    const AllPorcentaje = await Porcentaje.findAll();
    return AllPorcentaje;
  } catch (error) {
    throw new Error("No hay registros para mostrar");
  }
};

const getPorcentajeById = async (id) => {
  try {
    const porcentajeById = await Porcentaje.findByPk(id);
    return porcentajeById;
  } catch (error) {
    throw new Error("Error no se encontro registro con ese Id");
  }
};

const updatePorcentaje = async (id, nPorcentaje) => {
  try {
    const editPorcentaje = await Porcentaje.findByPk(id);
    if (!editPorcentaje) {
      return { error: "No se encontro el Porcentaje." };
    }
    await editPorcentaje.update(nPorcentaje);
    const updatePorcentaje = await Porcentaje.findByPk(id);
    return updatePorcentaje;
  } catch (error) {
    throw new Error("Error no pudimos actualizar el Porcentaje.");
  }
};

const deletePorcentaje = async (id) => {
  try {
    const deletePorcentaje = await Porcentaje.findByPk(id);
    if (!deletePorcentaje) {
      return { error: "No se encontro el Porcentaje." };
    }
    await deletePorcentaje.destroy();
    return { mensaje: "El Porcentaje fue eliminda correctamente." };
  } catch (error) {
    throw new Error("Error no pudimos eliminar el Porcentaje");
  }
};

module.exports = {
  postPorcentaje,
  getAllPorcentaje,
  getPorcentajeById,
  updatePorcentaje,
  deletePorcentaje,
};
