const { Router } = require("express");
const router = Router();

const {
  searchUserByFortnight,
  searchAllUserByFortnight,
} = require("../../controller/controllerRegistros/cSearchUserByFortnight.js");
const { verifyJWT } = require("../../helper/jwtHelper.js");

router.get("/:ids/:id", verifyJWT, async (req, res) => {
  const { ids } = req.params;
  const { id } = req.params;

  try {
    const quincena = await searchUserByFortnight(ids, id);
    return res.status(200).json(quincena);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});
router.get("/:id", verifyJWT, async (req, res) => {
  const { id } = req.params;

  try {
    const quincena = await searchAllUserByFortnight(id);
    return res.status(200).json(quincena);
  } catch (error) {
    console.log(error)
    return res.status(500).send(error.message);
  }
});

module.exports = router;
