export function login(){
    req.on("data", (data) => {
        console.log(`Usuário logado com sucesso !
        \n ${data.toString()}`);
    });
}