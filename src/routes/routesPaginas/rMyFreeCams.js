const { Router } = require("express");
const router = Router();

const {
  postMyFreeCams,
} = require("../../controller/controllerPaginas/cMyFreeCams.js");

router.post("/", async (req, res) => {
  const myFreeCams = req.body;
  try {
    const newMyFreeCams = await postMyFreeCams(myFreeCams);
    return res.status(200).json(newMyFreeCams);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
