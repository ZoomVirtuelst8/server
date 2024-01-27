const { Quincena } = require("../../db.js");

const postQuincena = async ({ nombreQuincena, fechaDeInicio, fechaFinal }) => {
  try {
    const nQuincena = await Quincena.findOrCreate({
      where: {
        nombre: nombreQuincena,
        inicia: fechaDeInicio,
        final: fechaFinal,
      },
    });
    return nQuincena;
  } catch (error) {
    throw new Error("Lo sentimos no pudimos crear la quincena");
  }
};

const getAllQuincena = async () => {
  try {
    const allQuincena = await Quincena.findAll();
    allQuincena.sort((a, b) => {
      // Convierte las fechas a un formato numérico para comparar
      const dateA = Date.parse(
        a.inicia.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$2-$1")
      );
      const dateB = Date.parse(
        b.inicia.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$2-$1")
      );

      return dateA - dateB;
    });
    return allQuincena;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar");
  }
};

const getQuincenaById = async (id) => {
  try {
    const quincenaId = await Quincena.findByPk(id);
    return quincenaId;
  } catch (error) {
    throw new Error("Lo siento no fue posible encontrar la quincena");
  }
};

const updateQuincena = async (id, nQuincena) => {
  try {
    const editQuincena = await Quincena.findByPk(id);
    if (!editQuincena) {
      return { error: "no se encontro la quincena" };
    }
    await Quincena.update(nQuincena);
    const updateQuincena = await Quincena.findByPk(id);
    return updateQuincena;
  } catch (error) {
    throw new Error("No pudimos actualizar la quincena");
  }
};

const deleteQuincena = async (id) => {
  try {
    const deleteQuincena = await Quincena.findByPk(id);
    if (!deleteQuincena) {
      return { error: "Lo sentimos no encontramos la quincena." };
    }
    await deleteQuincena.destroy();
    return { mensaje: "La quincena fue eliminada correctamente" };
  } catch (error) {
    throw new Error("Error no se pudo eliminar la quincena");
  }
};

module.exports = {
  postQuincena,
  getAllQuincena,
  getQuincenaById,
  updateQuincena,
  deleteQuincena,
};
