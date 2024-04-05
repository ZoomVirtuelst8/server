const { Router } = require("express");
const router = Router();

const { postStreamRay } = require("../controller/cStreamRay.js");
const { verifyJWT } = require("../helper/jwtHelper.js");

router.post("/", verifyJWT, async (req, res) => {
  const streamRay = req.body;
  try {
    const newStreamRay = await postStreamRay(streamRay);
    return res.status(200).json(newStreamRay);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
