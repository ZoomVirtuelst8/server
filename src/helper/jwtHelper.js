const fs = require("fs");
const jwt = require("jsonwebtoken");

const privateKeyPath = "./security/keys/private-key.pem";
const publicKeyPath = "./security/keys/public-key.pem";

function readPrivateKey(filePath) {
  try {
    if (fs.existsSync(filePath)) {
      return fs.readFileSync(filePath, "utf8");
    } else {
      console.error(`El archivo de clave privada no existe: ${filePath}`);
      process.exit(1);
    }
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

function loadedPrivateKey() {
  try {
    const privateKey = readPrivateKey(privateKeyPath);

    if (privateKey && typeof privateKey === "string") {
      return privateKey;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
}

function signJWT(payload) {
  try {
    const privateKey = loadedPrivateKey();
    if (privateKey && typeof privateKey === "string") {
      return jwt.sign(payload, privateKey, {
        algorithm: "RS256"
      });
    } else {
      throw new Error("La clave privada no está cargada correctamente.");
    }
  } catch (error) {
    console.error("Error in signJWT function:", error);
    throw new Error("Error al firmar el token");
  }
}

function verifyJWT(req, res, next) {
    try {
      const token = req.headers.authorization;
      const publicKey = fs.readFileSync(publicKeyPath, "utf8");
    const verified = jwt.verify(token, publicKey, { algorithms: ["RS256"] });
    req.user =  verified;
    next()
  } catch (error) {
    throw Error("No tiene los permisos suficientes");
  }
}

module.exports = { signJWT, verifyJWT };
