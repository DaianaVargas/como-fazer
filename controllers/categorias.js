const api = require("../api");

const novaForm = (req, res) => {
  res.render("categorias/nova");
};

const nova = async (req, res) => {
  await api.create("categorias", {
    categoria: req.body.categoria,
  });
  res.redirect("/categorias");
};

const listHome = (req, res) => {
  res.render("home/index");
};

const list = async (req, res) => {
  const categorias = await api.list("categorias");
  res.render("categorias/index", { categorias });
};

const apagar = async (req, res) => {
  await api.apagar("categorias", req.params.id);
  await api.apagar("publicacoes", req.params.id);
  res.redirect("/categorias");
};

const editarForm = async (req, res) => {
  const categoria = await api.get("categorias", req.params.id);
  res.render("categorias/editar", { categoria });
};

const editar = async (req, res) => {
  await api.update("categorias", req.params.id, {
    categoria: req.body.categoria,
  });
  res.redirect("/categorias");
};

module.exports = {
  novaForm,
  nova,
  list,
  apagar,
  editarForm,
  editar,
  listHome,
};
