const { Router } = require("express");
const router = Router();

const { logging } = require("../controller/authController.js");

router.post("/", async (req, res) => {
  const { session, password } = req.body;
  try {
    const token = await logging({ session, password });
    if (token.error) {
      return res.status(404).json(token.error);
    }
    res.cookie("accessToken", token, { httpOnly: true, secure: true });
    res.status(200).json({ success: true, token });
  } catch (error) {
    return res.status(500).send(error);
  }
});

module.exports = router;
