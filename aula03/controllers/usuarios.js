let usuarios = [z];
export function listar(){
    return usuarios;
}

export function buscarPorId(id){
    return usuarios.find(usuario => usuario.id == id);
}

export function criar(usuario) {
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
}

