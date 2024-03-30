const { Router } = require("express");
const router = Router();

//* importacion de rutas
const rAdultwork = require("./routesPaginas/rAdultWork.js");
const rAmateur = require("./routesPaginas/rAmateur.js");
const rBonga = require("./routesPaginas/rBonga.js");
const rCam4 = require("./routesPaginas/rCam4.js");
const rChaturbate = require("./routesPaginas/rChaturbate.js");
const rDirty = require("./routesPaginas/rDirty.js");
const rIslive = require("./routesPaginas/rIsLive.js");
const rSender = require("./routesPaginas/rSender.js");
const rSkype = require("./routesPaginas/rSkype.js");
const rStripchat = require("./routesPaginas/rStripchat.js");
const rVx = require("./routesPaginas/rVx.js");
const rXlove = require("./routesPaginas/rXlove.js");
const rXloveNueva = require("./routesPaginas/rXloveNueva.js");
const rUser = require("./routesRegistros/rUser.js");
const rPaginas = require("./routesRegistros/rPaginas.js");
const rProducto = require("./routesRegistros/rProducto.js");
const rCompras = require("./routesRegistros/rCompras.js");
const rVenta = require("./routesRegistros/rVentas.js");
const rQuincena = require("./routesRegistros/rQuincena.js");
const rComment = require("./routesRegistros/rComments.js");
const rUserName = require("./routesRegistros/rUserName.js");
const rMoneda = require("./routesRegistros/rMoneda.js");
const rPorcentaje = require("./routesRegistros/rPorcentaje.js");
const rUbicacion = require("./routesRegistros/rUbicacion.js");
const rRelationUbicationAndPorcentaje = require("./routesRegistros/rRelationUbicationAndPorcentaje.js");
const rMondo = require("./routesPaginas/rMondo.js");
const rMyFreeCams = require("./routesPaginas/rMyFreeCams.js");
const rSakura = require("./routesPaginas/rSakura.js");
const rstreamate = require("./routesPaginas/rStreamate.js");
const rStreamRay = require("./routesPaginas/rStreamRay.js");
const rTripleSiete = require("./routesPaginas/rTripleSiete.js");
const rSearchProducto = require("./routesRegistros/rSearchProducto.js");
const rSearchUserByFortnight = require("./routesRegistros/rSearchUserByFortnight.js");
const rPrestamos = require("./routesRegistros/rPrestamos.js");
const rRojo = require("./routesRegistros/rRojo.js");
const authRouter = require('./authRouter.js')

//* ejecucion de rutasrouter.use("/", rPassport);
const pathRoot = "/api/zv1";
const pathAut = "auth";
const path = {
  commentario: `${pathRoot}/${pathAut}/comentario`,
  compras: `${pathRoot}/${pathAut}/compras`,
  moneda: `${pathRoot}/${pathAut}/moneda`,
  porcentaje: `${pathRoot}/${pathAut}/porcentaje`,
  paginas: `${pathRoot}/${pathAut}/paginas`,
  prestamos: `${pathRoot}/${pathAut}/prestamos`,
  producto: `${pathRoot}/${pathAut}/producto`,
  productos: `${pathRoot}/${pathAut}/productos`,
  quincena: `${pathRoot}/${pathAut}/quincena`,
  quincenauser: `${pathRoot}/${pathAut}/quincenauser`,
  ubicacion: `${pathRoot}/${pathAut}/ubicacion`,
  venta: `${pathRoot}/${pathAut}/venta`,
  relation: `${pathRoot}/${pathAut}/relation`,
  username: `${pathRoot}/${pathAut}/username`,
  rojo: `${pathRoot}/${pathAut}/rojo`,
  corte: `${pathRoot}/${pathAut}/corte`,
  amateur: `${pathRoot}/${pathAut}/amateur`,
  bonga: `${pathRoot}/${pathAut}/bonga`,
  cam4: `${pathRoot}/${pathAut}/cam4`,
  chaturbate: `${pathRoot}/${pathAut}/chaturbate`,
  dirty: `${pathRoot}/${pathAut}/dirty`,
  islive: `${pathRoot}/${pathAut}/islive`,
  sender: `${pathRoot}/${pathAut}/sender`,
  skype: `${pathRoot}/${pathAut}/skype`,
  stripchat: `${pathRoot}/${pathAut}/stripchat`,
  vx: `${pathRoot}/${pathAut}/vx`,
  xlove: `${pathRoot}/${pathAut}/xlove`,
  xlovenueva: `${pathRoot}/${pathAut}/xlovenueva`,
  mondo: `${pathRoot}/${pathAut}/mondo`,
  myfreecams: `${pathRoot}/${pathAut}/myfreecams`,
  sakura: `${pathRoot}/${pathAut}/sakura`,
  streamate: `${pathRoot}/${pathAut}/streamate`,
  streamray: `${pathRoot}/${pathAut}/streamray`,
  triplesiete: `${pathRoot}/${pathAut}/triplesiete`,
  login: `${pathRoot}/login`,
  registro: `${pathRoot}/registro`,
};

router.use(path.login, authRouter);
router.use(path.commentario, rComment);
router.use(path.compras, rCompras);
router.use(path.moneda, rMoneda);
router.use(path.porcentaje, rPorcentaje);
router.use(path.paginas, rPaginas);
router.use(path.prestamos, rPrestamos);
router.use(path.producto, rProducto);
router.use(path.productos, rSearchProducto);
router.use(path.quincena, rQuincena);
router.use(path.quincenauser, rSearchUserByFortnight);
router.use(path.ubicacion, rUbicacion);
router.use(path.registro, rUser);
router.use(path.venta, rVenta);
router.use(path.relation, rRelationUbicationAndPorcentaje);
router.use(path.username, rUserName);
router.use(path.rojo, rRojo);

router.use(path.corte, rAdultwork);
router.use(path.amateur, rAmateur);
router.use(path.bonga, rBonga);
router.use(path.cam4, rCam4);
router.use(path.chaturbate, rChaturbate);
router.use(path.dirty, rDirty);
router.use(path.islive, rIslive);
router.use(path.sender, rSender);
router.use(path.skype, rSkype);
router.use(path.stripchat, rStripchat);
router.use(path.vx, rVx);
router.use(path.xlove, rXlove);
router.use(path.xlovenueva, rXloveNueva);
router.use(path.mondo, rMondo);
router.use(path.myfreecams, rMyFreeCams);
router.use(path.sakura, rSakura);
router.use(path.streamate, rstreamate);
router.use(path.streamray, rStreamRay);
router.use(path.triplesiete, rTripleSiete);

module.exports = router;
