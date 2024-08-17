import instance from "../../aula04/banco/conexao";

export function listar(){
    return instance.query(`SELECT * FROM usuarios`);
}

export function buscarPorId(id){
    return instance.query("SELECT * FROM usuarios WHERE id = ?", {id});
}

/*export function criar(usuario) {
    usuario.id = usuarios.length ? usuarios[usuarios.length].id : 1;
    usuarios.push(usuario);
    return usuario;
}

export function deletar(id) {
    usuarios = usuarios.filter(usuario => usuario.id != id);
    return usuarios;
}

export function modificar(id, novosDados) {
    let usuario = usuarios.find(usuario => usuario.id == id);
    if (usuario) {
        Object.assign(usuario, novosDados);
    }
    return usuario;
}*/