const { Router } = require("express");
const router = Router();

const {
  postUser,
  getAllUser,
  getAllUserIdName,
  getUserById,
  getCheckById,
  updateUser,
  deleteUser,
} = require("../../controller/controllerRegistros/cUser.js");

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
    return res.status(500).json({ error: "No se pudo registrar el usuario" });
  }
});

router.get("/", async (req, res) => {
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
router.get("/sencillo", async (req, res) => {
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

router.get("/:id", async (req, res) => {
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
router.get("/check/:id", async (req, res) => {
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

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const editUser = req.body;
  try {
    const nUser = await updateUser(id, editUser);
    return res.status(200).json(nUser);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
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
