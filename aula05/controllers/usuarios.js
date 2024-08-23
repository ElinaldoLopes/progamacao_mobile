import usuarios from "../models/usuarios.js";
function inserirUsuario(req, res) {
    const usuario = req.body;

    usuario.insert(usuario)
    .then((result) => {
        res.status(201).json(result);
    })
    .catch((error) => {
        res.status(500).json({ erro: error.message });
    });
}