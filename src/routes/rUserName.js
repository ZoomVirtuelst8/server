const { Router } = require("express");
const router = Router();

const {
  postUserName,
  getAllUserName,
  getUserNameById,
  updateUserName,
  deleteUserName,
} = require("../controller/cNuevoUserName.js");

const { verifyJWT } = require("../helper/jwtHelper.js");

router.post("/", async (req, res) => {
  const input = req.body;
  try {
    const nUserName = await postUserName(input);
    const newUserNames = nUserName[0]
    if (newUserNames?.Error) {
      return res.status(404).json(newUserNames);
    }
    return res.status(200).json(newUserNames);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", async (req, res) => {
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
