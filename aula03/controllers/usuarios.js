let usuarios = [
    { id: 1, nome: "João", email: ""},
    { id: 2, nome: "Maria", email: ""},
    { id: 3, nome: "José", email: ""},
    { id: 4, nome: "Pedro", email: ""},
    { id: 5, nome: "Paulo", email: ""}
];
export function listar(){
    return usuarios;
}

export function buscarPorId(id){
    return usuarios.find(usuario => usuario.id == id);
}

