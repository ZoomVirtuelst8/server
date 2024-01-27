const { Router } = require("express");
const router = Router();

const { postMondo } = require("../../controller/controllerPaginas/cMondo.js");

router.post("/", async (req, res) => {
  const mondo = req.body;
  try {
    const newMondo = await postMondo(mondo);
    return res.status(200).json(newMondo);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
