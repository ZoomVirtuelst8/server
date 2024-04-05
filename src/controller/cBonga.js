const { Bonga, UserName, Quincena } = require("../db.js");

const pbo = async (cobo) => {
  try {
    const rcobo = [];
    // Recorremos corteChat y guardamos cada objeto como un registro en la base de datos
    for (const i of cobo) {
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
        const [r, c] = await Bonga.findOrCreate({
          where: {
            fecha: i.fecha,
          },
          defaults: {
            userName: i.user,
            dolares: i.dolares,
            mensual: false,
          },
        });

        if (c) {
          await r.setCorte_bonga(userNameId); // Establecer la relación con UserName
          await r.setQ_bonga(quincena); // Establecer la relación con Quincena
          rcobo.push(r);
        }
      } catch (error) {
        console.error("Error en una iteración del bucle:", error);
        // Continuar con la próxima iteración
      }
    }
    // Opcionalmente, puedes devolver algún mensaje o resultado para confirmar que se han guardado los registros correctamente.
    rcobo.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rcobo;
  } catch (error) {
    throw new Error("Error al guardar los registros: " + error.message);
  }
};
const gbo = async () => {
  try {
    const cobo = await Bonga.findAll();
    cobo.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return cobo;
  } catch (error) {
    throw new Error("Error al buscar los registros " + error.message);
  }
};

const deleteBonga = async (id) => {
  try {
    const deleteBonga = await Bonga.findByPk(id);
    if (!deleteBonga) {
      return { error: "Lo sentimos no encontramos el Corte." };
    }
    await deleteBonga.destroy();
    return { mensaje: "El corte fue eliminado correctamente" };
  } catch (error) {
    throw Error("Error no se pudo eliminar el corte.");
  }
};

module.exports = {
  pbo,
  gbo,
  deleteBonga,
};
