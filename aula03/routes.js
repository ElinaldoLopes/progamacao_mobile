import express from "express";
import * as userController from "./controllers/usuarios.js";

const routes = express.Router();

routes.get("/usuarios", (req, res) => {
    res.json(userController.listar());

});

routes.get("/usuarios/:id", (req, res) => {
    const id = req.params.id;
    res.json(userController.buscarPorId(id));
});

routes.post("/usuarios/:nome/:email", (req, res) => {
    const { nome, email } = req.params;
    const novoUsuario = { nome, email };
    const usuarioCriado = userController.criar(novoUsuario);
    res.status(201).json(usuarioCriado);
});

routes.delete("/usuarios/:id", (req, res) => {
    const id = req.params.id;
    userController.deletar(id);
    res.status(204).send();
});

routes.put("/usuarios/:id/:nome/:email", (req, res) => {
    const { id, nome, email } = req.params;
    const novosDados = { nome, email };
    const usuarioModificado = userController.modificar(id, novosDados);
    res.json(usuarioModificado);
});

export default routes;