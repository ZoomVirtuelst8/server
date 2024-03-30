const { Router } = require("express");
const router = Router();

const {
  postRojo,
  getAllRojo,
} = require("../../controller/controllerRegistros/cRojo.js");
const { verifyJWT } = require("../../helper/jwtHelper.js");

router.post("/", verifyJWT, async (req, res) => {
  const rojo = req.body;
  try {
    const newRojo = await postRojo(rojo);
    return res.status(200).json(newRojo);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", verifyJWT, async (req, res) => {
  try {
    const allRojo = await getAllRojo();
    return res.status(200).json(allRojo);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
