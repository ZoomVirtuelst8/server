const { Router } = require("express");
const router = Router();

const {
  postTripeSiete,
  getTripleSiete,
} = require("../controller/cTripleSiete.js");
const { verifyJWT } = require("../helper/jwtHelper.js");

router.post("/", verifyJWT, async (req, res) => {
  const tripleSiete = req.body;
  try {
    const newTriplesSete = await postTripeSiete(tripleSiete);
    return res.status(200).json(newTriplesSete);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.get("/", verifyJWT, async (req, res) => {
  try {
    const tripleSiete = await getTripleSiete();
    return res.status(200).json(tripleSiete);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
