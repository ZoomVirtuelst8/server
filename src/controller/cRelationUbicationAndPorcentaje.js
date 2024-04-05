const { User, Porcentaje, Ubicacion } = require("../db.js");

const relationUbicationAndPorcentaje = async ({
  porcentaje,
  ubicacion,
  user,
}) => {
  try {
    const rUser = await User.findByPk(user);
    if (!rUser) {
      throw Error("Usuario no encontrado");
    }
    const rUbicacion = await Ubicacion.findByPk(ubicacion);
    if (!rUbicacion) {
      throw Error("Ubicacion no encontrada");
    }
    const rPorcentaje = await Porcentaje.findByPk(porcentaje);
    if (!rPorcentaje) {
      throw Error("Porcentaje no encontrado");
    }

    await rUser.setP_porcentaje(rPorcentaje);
    await rUser.setP_ubicacion(rUbicacion);

    return rUser;
  } catch (error) {
    throw new Error("No fue posible hacer las relaciones");
  }
};

module.exports = {
  relationUbicationAndPorcentaje,
};
