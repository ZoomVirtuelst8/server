const { Router } = require("express");
const router = Router();
const {
  pad,
  gad,
  ppad,
  gpad,
  deleteCorte,
} = require("../controller/cAdultwork");
const { verifyJWT } = require("../helper/jwtHelper");

router.post("/", verifyJWT, async (req, res) => {
  const coad = req.body.coad;
  try {
    const necoad = await pad(coad); //enviar al controller
    if (necoad[0]) {
      return res.status(200).json(necoad);
    } else {
      return res
        .status(404)
        .json({ error: "Los registros ya fueron realizados" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error al guardar los registros: " });
  }
});

router.get("/", verifyJWT, async (req, res) => {
  try {
    const coad = await gad();
    if (coad[0]) {
      res.status(200).json(coad);
    } else {
      res.status(405).json({ error: "No hay resgistro para mostrar." });
    }
  } catch (error) {
    return res.status(404).send(error.message);
  }
});

router.post("/parcial", verifyJWT, async (req, res) => {
  const copad = req.body.copad;
  try {
    const ncopad = await ppad(copad);
    if (ncopad[0]) {
      return res.status(200).json(ncopad);
    } else {
      return res.status(404).json({ error: "Los registros ya fueron subidos" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Error al guardar los registros: " });
  }
});

router.get("/parcial", verifyJWT, async (req, res) => {
  try {
    const copad = await gpad();
    if (copad[0]) {
      res.status(200).json(copad);
    } else {
      res.status(404).json({ error: "No hay resgistros para mostrar." });
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/delete/:id", verifyJWT, async (req, res) => {
  const { id } = req.params;
  try {
    const deleteCortes = await deleteCorte(id);
    return res.status(200).json(deleteCortes);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
