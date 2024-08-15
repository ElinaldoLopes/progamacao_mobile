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

export default routes;