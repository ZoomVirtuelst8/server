const { Router } = require("express");
const router = Router();

const {
  postUser,
  postUserAuth,
  getAllUser,
  getAllUserIdName,
  getUserById,
  getCheckById,
  updateUser,
  deleteUser,
} = require("../controller/cUser.js");
const { verifyJWT } = require("../helper/jwtHelper.js");

router.post("/", async (req, res) => {
  const user = req.body;
  try {
    const nUser = await postUser(user);
    if (nUser) {
      return res.status(200).json(nUser);
    } else {
      return res.status(404).json({
        error:
          "No se logro crear el usuario vuelva a intentar o contacte con soporte",
      });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.post("/veirify", verifyJWT, async (req, res) => {
  const user = req.body;
  try {
    const nUser = await postUserAuth(user);
    if (nUser) {
      return res.status(200).json(nUser);
    } else {
      return res.status(404).json({
        error:
          "No se logro crear el usuario vuelva a intentar o contacte con soporte",
      });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", verifyJWT, async (req, res) => {
  try {
    const user = await getAllUser();
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ error: "No hay registros para mostrar" });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
router.get("/sencillo", verifyJWT, async (req, res) => {
  try {
    const user = await getAllUserIdName();
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ error: "No hay registros para mostrar" });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/:id", verifyJWT, async (req, res) => {
  try {
    const id = req.params.id;
    const user = await getUserById(id);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ error: "No se encontro el usuario" });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/check/:id", verifyJWT, async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getCheckById(id);
    if (user) {
      return res.status(200).json(user);
    } else {
      return res.status(404).json({ error: "No se encontro el usuario" });
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.put("/:id", verifyJWT, async (req, res) => {
  const { id } = req.params;
  const editUser = req.body;
  console.log(id, editUser)
  try {
    const nUser = await updateUser(id, editUser);
    return res.status(200).json(nUser);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/delete/:id", verifyJWT, async (req, res) => {
  const { id } = req.params;
  try {
    const user = await deleteUser(id);
    if (user.error) {
      return res.status(404).json(user);
    }
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).send({ error: "Error al eliminar el usuario." });
  }
});

module.exports = router;
