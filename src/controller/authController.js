const bcrypt = require("bcryptjs");
const { User } = require("../db.js");
const { signJWT } = require("../helper/jwtHelper.js");

const logging = async ({ session, password }) => {
  try {
    const user = await User.findOne({
      where: { session: session },
      attributes: ["id", "nombre", "apellido", "session", "password", "admin"],
    });
    //verificamos si el user existe
    if (!user) {
      return {error: "Credenciales incorrectas."};
    }
    //revisamos que el password este correcto
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return {error: "Credenciales incorrectas."};
    }
    const payload = {
      id: user.id,
      nombre: user.nombre,
      apellido: user.apellido,
      session: user.session,
      admin: user.admin
    }
    const token = signJWT(payload);
    return token;
  } catch (error) {
    throw new Error("Error en el servidor");
  }
};
module.exports = { logging };
