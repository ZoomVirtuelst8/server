const { Adultwork, UserName, Quincena } = require("../../db.js");

const pad = async (coad) => {
  try {
    const rcoad = [];
    // Recorremos newData y guardamos cada objeto como un registro en la base de datos
    for (const i of coad) {
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
        const r = await Adultwork.create({
          fecha: i.fecha,
          userName: i.user,
          creditos: i.creditos,
          parcial: i.parcial,
          mensual: false,
        });
        if (r) {
          await r.setCorte_adult(userNameId);
          await r.setQ_adult(quincena);
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

const gad = async () => {
  try {
    const coad = await Adultwork.findAll({ where: { parcial: false } });
    coad.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return coad;
  } catch (error) {
    throw new Error("Error al buscar los registros " + error.message);
  }
};

const ppad = async (copad) => {
  try {
    const rcopad = [];
    // Recorremos newData y guardamos cada objeto como un registro en la base de datos
    for (const i of copad) {
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
        const r = await Adultwork.create({
          userName: i.user,
          creditos: i.creditos,
          parcial: i.parcial,
          mensual: false,
        });
        if (r) {
          await r.setCorte_adult(userNameId);
          await r.setQ_adult(quincena);
        }
      } catch (error) {
        console.error("Error en una iteración del bucle:", error);
      }
    }
    // Opcionalmente, puedes devolver algún mensaje o resultado para confirmar que se han guardado los registros correctamente.
    rcopad.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return rcopad;
  } catch (error) {
    // Manejo de errores en caso de que algo falle durante el proceso de creación de registros.
    throw new Error("Error al guardar los registros: " + error.message);
  }
};

const gpad = async () => {
  try {
    const copad = await Adultwork.findAll({ where: { parcial: true } });
    copad.sort((a, b) => {
      return a.userName.localeCompare(b.userName);
    });
    return copad;
  } catch (error) {
    throw new Error("Error al buscar los registros " + error.message);
  }
};

const deleteCorte = async (id) => {
  try {
    const deleteAdult = await Adultwork.findByPk(id);
    if (!deleteAdult) {
      return { error: "Lo sentimos no encontramos el Corte" };
    }
    await deleteAdult.destroy();
    return { mensaje: "El Corte fue eliminado" };
  } catch (error) {
    throw new Error("Error no se pudo eliminar el Corte");
  }
};

module.exports = {
  pad,
  gad,
  ppad,
  gpad,
  deleteCorte
};
