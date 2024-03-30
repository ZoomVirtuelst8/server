const { Router } = require("express");
const router = Router();

const {
  postStreamate,
  getStreamate,
  deleteStreamate,
} = require("../../controller/controllerPaginas/cStreamate.js");
const { verifyJWT } = require("../../helper/jwtHelper.js");

router.post("/", verifyJWT, async (req, res) => {
  const streamate = req.body;
  try {
    const newStreamate = await postStreamate(streamate);
    return res.status(200).json(newStreamate);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", verifyJWT, async (req, res) => {
  try {
    const allStreamate = await getStreamate();
    return res.status(200).json(allStreamate);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/delete/:id", verifyJWT, async (req, res) => {
  const { id } = req.params;
  try {
    const deleteStreamates = await deleteStreamate(id);
    return res.status(200).json(deleteStreamates);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
module.exports = router;
