const { Comentario, User } = require("../../db.js");

const postComment = async ({ userId, comment }) => {
  try {
  
    const nComment = await Comentario.findOrCreate({where: {comment}});

    const user = await User.findByPk(userId);

    if (user) {
      await nComment[0].setComments(user);
    }

    return nComment[0];
  } catch (error) {
    throw new Error("Error no se pudo registrar el commentario");
  }
};

const getAllComment = async () => {
  try {
    const comments = await Comentario.findAll();
    return comments;
  } catch (error) {
    throw new Error("No hay registros para mostrar");
  }
};

const getCommentById = async (id) => {
  try {
    const commentId = await Comentario.findByPk(id);
    return commentId;
  } catch (error) {
    throw new Error("Error no hay resgistros para mostrar");
  }
};

const updateComment = async (id, nComment) => {
  try {
    const editComment = await Comentario.findByPk(id);
    if (!editComment) {
      return { error: "No se encontro el comentario." };
    }
    await editComment.update(nComment);
    const updateComment = await Comentario.findByPk(id);
    return updateComment;
  } catch (error) {
    throw new Error("Error no pudimos actualizar el comentario");
  }
};

const deleteComment = async (id) => {
  try {
    const deleteComment = await Comentario.findByPk(id);
    if (!deleteComment) {
      return { error: "No se encontro el comentario." };
    }
    await deleteComment.destroy();
    return { mensaje: "El comentario fue eliminada correctamente" };
  } catch (error) {
    throw new Error("Error no pudimos eliminar el comentario");
  }
};

module.exports = {
  postComment,
  getAllComment,
  getCommentById,
  updateComment,
  deleteComment,
};
