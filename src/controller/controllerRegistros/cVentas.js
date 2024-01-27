const { Ventas, Quincena, Producto } = require("../../db.js");

const postVentas = async (venta) => {
  try {
    const ventas = [];
    for (const item of venta) {
      if (item.cuotas === 0) {
        item.cuotas = 1;
      }
      if (item.cantidad === 0) {
        item.cantidad = 1
      }
      try {
        const quincenaId = await Quincena.findOne({
          where: { id: item.quincenaId },
        });
        const productoId = await Producto.findOne({
          where: { id: item.productoId },
        });

        if (item.cuotas > 1) {
          const allQuincenas = await Quincena.findAll();
          allQuincenas.sort((a, b) => {
            // Convierte las fechas a un formato numérico para comparar
            const dateA = Date.parse(
              a.inicia.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$2-$1")
            );
            const dateB = Date.parse(
              b.inicia.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$3-$2-$1")
            );

            return dateA - dateB;
          });
          for (let i = 0; i < item.cuotas; i++) {
            const quincenaIndex = allQuincenas.findIndex(
              (q) => q.id === item.quincenaId
            );
            const cuotaQuincenaId = allQuincenas[quincenaIndex + i]?.id;
            const nombre = `${i + 1}/${item.cuotas} ${productoId.nombre}`;

            const nVenta = await Ventas.create({
              cantidad: item.cantidad,
              cuotas: item.cuotas,
              userId: item.userId,
              valor: (item.precioVentaDiferido * item.cantidad) / item.cuotas,
              nombre: nombre,
            });

            await nVenta.setQ_venta(cuotaQuincenaId);

            if (i === 0) {
              await nVenta.setVenta(productoId);
            }

            ventas.push(nVenta);
          }
        } else {
          const nVenta = await Ventas.create({
            cantidad: item.cantidad,
            cuotas: item.cuotas,
            userId: item.userId,
            valor: item.precioVenta * item.cantidad,
            nombre: productoId.nombre,
          });

          if (nVenta) {
            await nVenta.setVenta(productoId);
            await nVenta.setQ_venta(quincenaId);
            ventas.push(nVenta);
          }
        }
      } catch (error) {
        console.error("Error en una iteración del bucle:", error);
      }
    }
    return ventas;
  } catch (error) {
    throw new Error("Lo sentimos no pudimos crear la venta");
  }
};

const getAllVentas = async () => {
  try {
    const allVentas = await Ventas.findAll();
    // allVentas.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
    return allVentas;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar");
  }
};

const getVentaById = async (id) => {
  try {
    const getVenta = await Ventas.findByPk(id);
    return getVenta;
  } catch (error) {
    throw Error("Error no se encontro la venta.");
  }
};

const updateVentas = async (id, nVenta) => {
  try {
    const editVenta = await Ventas.findByPk(id);
    if (!editVenta) {
      return { error: "no se encontro la venta." };
    }
    await Ventas.update(nVenta);
    const updateVentas = await Ventas.findByPk(id);
    return updateVentas;
  } catch (error) {
    throw new Error("Error no pudimos actualizar la venta.");
  }
};

const deleteVenta = async (id) => {
  try {
    const deleteVenta = await Ventas.findByPk(id);
    if (!deleteVenta) {
      return { error: "Lo sentimos no encontramos la venta." };
    }
    await deleteVenta.destroy();
    return { mensaje: "La venta fue eliminada correctamente" };
  } catch (error) {
    throw Error("Error no se puedo eliminar la venta.");
  }
};

module.exports = {
  postVentas,
  getAllVentas,
  getVentaById,
  updateVentas,
  deleteVenta,
};
