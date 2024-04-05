const { Streamate, UserName, Quincena } = require("../db.js");

const postStreamate = async (streamate) => {
  try {
    const rstreamate = [];
    // Recorremos newData y guardamos cada objeto como un registro en la base de datos
    for (const i of streamate) {
      try {
        const userNameId = await UserName.findOne({
          where: {
            userName: i.user,
          },
        });
        const quincena = await Quincena.findOne({
          where: {
            id: i.quincena,
          },
        });
        const r = await Streamate.create({
          fecha: i.fecha,
          userName: i.user,
          dolares: i.dolares,
          fecha: i.fecha,
          mensual: false,
        });
        if (r) {
          await r.setCorte_streamate(userNameId);
          await r.setQ_streamate(quincena);
        }
      } catch (error) {
        console.error("Error en una iteración del bucle:", error);
        // Continuar con la próxima iteración
      }
    }
    // Opcionalmente, puedes devolver algún mensaje o resultado para confirmar que se han guardado los registros correctamente.
    rcoad.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rcoad;
  } catch (error) {
    // Manejo de errores en caso de que algo falle durante el proceso de creación de registros.
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

const getStreamate = async () => {
  try {
    const allStreamate = await Streamate.findAll();
    return allStreamate;
  } catch (error) {
    throw new Error("Lo siento no hay registros para mostrar");
  }
};

const deleteStreamate = async (id) => {
  try {
    const deleteStreamate = await Streamate.findByPk(id);
    if (!deleteStreamate) {
      return { error: "Lo sentimos no encontramos el Corte." };
    }
    await deleteStreamate.destroy();
    return { mensaje: "El corte fue eliminado correctamente" };
  } catch (error) {
    throw Error("Error no se pudo eliminar el corte.");
  }
};

module.exports = {
  postStreamate,
  getStreamate,
  deleteStreamate,
};
