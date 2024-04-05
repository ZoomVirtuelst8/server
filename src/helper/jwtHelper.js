const jwt = require("jsonwebtoken");


function signJWT(payload) {

  try {
    const privateKey = process.env.PRIVATE_KEY.replace(/\\n/g, '\n');
    if (!privateKey) {
      throw new Error("La clave privada no está definida en las variables de entorno.");
    }
      return jwt.sign(payload, privateKey, {
        algorithm: "RS256"
      });
     
  } catch (error) {
    console.error("Error in signJWT function:", error);
    throw new Error("Error al firmar el token");
  }
}

function verifyJWT(req, res, next) {
    try {
      const token = req.headers.authorization;
      const publicKey = process.env.PUBLIC_KEY.replace(/\\n/g, '\n');
    const verified = jwt.verify(token, publicKey, { algorithms: ["RS256"] });
    req.user =  verified;
    next()
  } catch (error) {
    throw Error("No tiene los permisos suficientes");
  }
}

module.exports = { signJWT, verifyJWT };
