const { Router } = require("express");
const router = Router();

const { postSakura } = require("../controller/cSakura.js");
const { verifyJWT } = require("../helper/jwtHelper.js");

router.post("/", verifyJWT, async (req, res) => {
  const sakura = req.body;
  try {
    const newSakura = await postSakura(sakura);
    return res.status(200).json(newSakura);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
