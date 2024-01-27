const { Router } = require("express");
const router = Router();

const { postSakura } = require("../../controller/controllerPaginas/cSakura.js");

router.post("/", async (req, res) => {
  const sakura = req.body;
  try {
    const newSakura = await postSakura(sakura);
    return res.status(200).json(newSakura);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
