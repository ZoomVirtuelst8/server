const { Router } = require("express");
const router = Router();

const {
  postUserName,
  getAllUserName,
  getUserNameById,
  updateUserName,
  deleteUserName,
} = require("../../controller/controllerRegistros/cNuevoUserName.js");

const { verifyJWT } = require("../../helper/jwtHelper.js");

router.post("/", verifyJWT, async (req, res) => {
  const input = req.body;
  try {
    const nUserName = await postUserName(input);
    if (nUserName?.Error) {
      return res.status(404).send(nUserName);
    }
    return res.status(200).json(nUserName);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", verifyJWT, async (req, res) => {
  try {
    const allUserName = await getAllUserName();
    return res.status(200).json(allUserName);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/:id", verifyJWT, async (req, res) => {
  const { id } = req.params;
  try {
    const userName = await getUserNameById(id);
    return res.status(200).json(userName);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.put("/:id", verifyJWT, async (req, res) => {
  const { id } = req.params;
  const editedUserName = req.body;
  try {
    const userName = await updateUserName(id, editedUserName);
    return res.status(200).json(userName);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/delete/:id", verifyJWT, async (req, res) => {
  const { id } = req.params;
  try {
    const userName = await deleteUserName(id);
    if (userName.error) {
      return res.status(404).json(userName);
    }
    return res.status(200).json(userName);
  } catch (error) {
    return res.status(500).send({ error: "Error al eliminar el userNames." });
  }
});

module.exports = router;

// const { UserName, Paginas, User } = require("../../db.js");

// const postUserName = async (input) => {
//   try {
//     const { paginas, user, ...userName } = input;

//     const newUser = await User.findByPk(user);
//     if (!newUser) {
//       throw new Error("Usuario no encontrado");
//     }
//     const createdUserNames = [];
//     for (const paginaId in userName) {
//       if (userName.hasOwnProperty(paginaId)) {
//         const paginaName = userName[paginaId];
//         const pagina = await Paginas.findOne({ where: { id: paginaId } });
//         if (paginaName !== "") {
//           const newUserName = await UserName.create({ userName: paginaName });
//           await newUserName.setUseres(newUser);
//           await newUserName.setUserNames(pagina);
//           newUserName.pagina = pagina.nombrePagina;
//           createdUserNames.push(newUserName.dataValues.userName);
//         } else {
//           createdUserNames.push(
//             `${pagina.dataValues.nombrePagina} no tiene un user`
//           );
//         }
//       }
//     }
//     return createdUserNames;
//   } catch (error) {
//     throw new Error("Error: No se pudo registrar el userName");
//   }
// };

// const getAllUserName = async () => {
//   try {
//     const allUserName = await UserName.findAll();
//     return allUserName;
//   } catch (error) {
//     throw new Error("No hay registros para mostrar");
//   }
// };

// const getUserNameById = async (id) => {
//   try {
//     const userName = await UserName.findByPk(id);
//     return userName;
//   } catch (error) {
//     throw new Error("No se encontro el UserName " + error.message);
//   }
// };

// const updateUserName = async (id, editedUserName) => {
//   try {
//     const editUserNames = await UserName.findByPk(id);
//     if (!editUserNames) {
//       return { error: "No se encontro el userName." };
//     }
//     await UserName.update(
//       {
//         userName: editedUserName.userName,
//       },
//       { where: { id } }
//     );
//     const updatesUserName = await UserName.findByPk(id);
//     return updatesUserName;
//   } catch (error) {
//     throw Error("No pudimos actualizar el userName. " + error.message);
//   }
// };

// const deleteUserName = async (id) => {
//   try {
//     const deletesUserName = await UserName.findByPk(id);
//     if (!deletesUserName) {
//       return { error: "Lo sentimos no encontramos el UserName." };
//     }
//     await deletesUserName.destroy();
//     return { mensaje: "El UserName fue eliminado correctamente" };
//   } catch (error) {
//     throw Error("Error no se pudo eliminar el UserName.");
//   }
// };

// module.exports = {
//   postUserName,
//   getAllUserName,
//   getUserNameById,
//   updateUserName,
//   deleteUserName,
// };
