const { Paginas, UserName } = require("../../db.js");

const postPagina = async (pagina) => {
  try {
    const nPagina = await Paginas.findOrCreate({
      where: {
        nombrePagina: pagina,
      },
    });
    return nPagina;
  } catch (error) {
    throw new Error(
      "Lo sentimos no pudimos agregar la pagina." + error.message
    );
  }
};

const getAllPaginas = async () => {
  try {
    const paginas = await Paginas.findAll(
      {include: [
        {
          model: UserName,
          as: "userNames",
        },
      ],}
    );
    paginas.sort((a, b) => a.nombrePagina.localeCompare(b.nombrePagina));
    return paginas;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar");
  }
};

const getPaginaById = async (id) => {
  try {
    const pagina = await Paginas.findByPk(id);
    return pagina;
  } catch (error) {
    throw Error("Error no hay registros para mostrar.");
  }
};

const updatePagina = async (id, nPagina) => {
  try {
    const editPagina = await Paginas.findByPk(id);
    if (!editPagina) {
      return { error: "No se encontro la pagina." };
    }
    await Paginas.update(nPagina);
    const updatePagina = await Paginas.findByPk(id);
    return updatePagina;
  } catch (error) {
    throw Error("No pudimos actualizar la quincena.");
  }
};

const deletePagina = async (id) => {
  try {
    const deletePagina = await Paginas.findByPk(id);
    if (!deletePagina) {
      return { error: "Lo sentimos no encontramos la pagina." };
    }
    await deletePagina.destroy();
    return { mensaje: "La pagina fue eliminada correctamente" };
  } catch (error) {
    throw Error("Error no se pudo eliminar la pagina.");
  }
};

module.exports = {
  postPagina,
  getAllPaginas,
  getPaginaById,
  updatePagina,
  deletePagina,
};
