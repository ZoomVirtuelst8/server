const { Router } = require("express");
const router = Router();

//* importacion de rutas
// const rAdultwork = require("./rAdultWork.js");
// const rAmateur = require("./rAmateur.js");
// const rBonga = require("./rBonga.js");
// const rCam4 = require("./rCam4.js");
// const rChaturbate = require("./rChaturbate.js");
// const rDirty = require("./rDirty.js");
// const rIslive = require("./rIsLive.js");
// const rMondo = require("./rMondo.js");
// const rMyFreeCams = require("./rMyFreeCams.js");
// const rSakura = require("./rSakura.js");
// const rSender = require("./rSender.js");
// const rSkype = require("./rSkype.js");
// const rStreamRay = require("./rStreamRay.js");
// const rstreamate = require("./rStreamate.js");
// const rStripchat = require("./rStripchat.js");
// const rTripleSiete = require("./rTripleSiete.js");
// const rVx = require("./rVx.js");
// const rXlove = require("./rXlove.js");
// const rXloveNueva = require("./rXloveNueva.js");

// const rComment = require("./rComments.js");
// const rCompras = require("./rCompras.js");
// const rMoneda = require("./rMoneda.js");
// const rPaginas = require("./rPaginas.js");
// const rPorcentaje = require("./rPorcentaje.js");
// const rPrestamos = require("./rPrestamos.js");
// const rProducto = require("./rProducto.js");
// const rQuincena = require("./rQuincena.js");
// const rRelationUbicationAndPorcentaje = require("./rRelationUbicationAndPorcentaje.js");
// const rRojo = require("./rRojo.js");
// const rSearchProducto = require("./rSearchProducto.js");
// const rSearchUserByFortnight = require("./rSearchUserByFortnight.js");
// const rUbicacion = require("./rUbicacion.js");
// const rUser = require("./rUser.js");
// const rUserName = require("./rUserName.js");
// const rVenta = require("./rVentas.js");

const authRouter = require("./authRouter.js");

//* ejecucion de rutasrouter.use("/", rPassport);
const pathRoot = "/api/zv1";
const pathAut = "auth";
const path = {
  // commentario: `${pathRoot}/${pathAut}/comentario`,
  // compras: `${pathRoot}/${pathAut}/compras`,
  // moneda: `${pathRoot}/${pathAut}/moneda`,
  // porcentaje: `${pathRoot}/${pathAut}/porcentaje`,
  // paginas: `${pathRoot}/${pathAut}/paginas`,
  // prestamos: `${pathRoot}/${pathAut}/prestamos`,
  // producto: `${pathRoot}/${pathAut}/producto`,
  // productos: `${pathRoot}/${pathAut}/productos`,
  // quincena: `${pathRoot}/${pathAut}/quincena`,
  // quincenauser: `${pathRoot}/${pathAut}/quincenauser`,
  // ubicacion: `${pathRoot}/${pathAut}/ubicacion`,
  // venta: `${pathRoot}/${pathAut}/venta`,
  // relation: `${pathRoot}/${pathAut}/relation`,
  // username: `${pathRoot}/${pathAut}/username`,
  // rojo: `${pathRoot}/${pathAut}/rojo`,
  // corte: `${pathRoot}/${pathAut}/corte`,
  // amateur: `${pathRoot}/${pathAut}/amateur`,
  // bonga: `${pathRoot}/${pathAut}/bonga`,
  // cam4: `${pathRoot}/${pathAut}/cam4`,
  // chaturbate: `${pathRoot}/${pathAut}/chaturbate`,
  // dirty: `${pathRoot}/${pathAut}/dirty`,
  // islive: `${pathRoot}/${pathAut}/islive`,
  // sender: `${pathRoot}/${pathAut}/sender`,
  // skype: `${pathRoot}/${pathAut}/skype`,
  // stripchat: `${pathRoot}/${pathAut}/stripchat`,
  // vx: `${pathRoot}/${pathAut}/vx`,
  // xlove: `${pathRoot}/${pathAut}/xlove`,
  // xlovenueva: `${pathRoot}/${pathAut}/xlovenueva`,
  // mondo: `${pathRoot}/${pathAut}/mondo`,
  // myfreecams: `${pathRoot}/${pathAut}/myfreecams`,
  // sakura: `${pathRoot}/${pathAut}/sakura`,
  // streamate: `${pathRoot}/${pathAut}/streamate`,
  // streamray: `${pathRoot}/${pathAut}/streamray`,
  // triplesiete: `${pathRoot}/${pathAut}/triplesiete`,
  login: `${pathRoot}/login`,
  // registro: `${pathRoot}/registro`,
};

router.use(path.login, authRouter);
// router.use(path.commentario, rComment);
// router.use(path.compras, rCompras);
// router.use(path.moneda, rMoneda);
// router.use(path.porcentaje, rPorcentaje);
// router.use(path.paginas, rPaginas);
// router.use(path.prestamos, rPrestamos);
// router.use(path.producto, rProducto);
// router.use(path.productos, rSearchProducto);
// router.use(path.quincena, rQuincena);
// router.use(path.quincenauser, rSearchUserByFortnight);
// router.use(path.ubicacion, rUbicacion);
// router.use(path.registro, rUser);
// router.use(path.venta, rVenta);
// router.use(path.relation, rRelationUbicationAndPorcentaje);
// router.use(path.username, rUserName);
// router.use(path.rojo, rRojo);

// router.use(path.corte, rAdultwork);
// router.use(path.amateur, rAmateur);
// router.use(path.bonga, rBonga);
// router.use(path.cam4, rCam4);
// router.use(path.chaturbate, rChaturbate);
// router.use(path.dirty, rDirty);
// router.use(path.islive, rIslive);
// router.use(path.sender, rSender);
// router.use(path.skype, rSkype);
// router.use(path.stripchat, rStripchat);
// router.use(path.vx, rVx);
// router.use(path.xlove, rXlove);
// router.use(path.xlovenueva, rXloveNueva);
// router.use(path.mondo, rMondo);
// router.use(path.myfreecams, rMyFreeCams);
// router.use(path.sakura, rSakura);
// router.use(path.streamate, rstreamate);
// router.use(path.streamray, rStreamRay);
// router.use(path.triplesiete, rTripleSiete);

module.exports = router;
