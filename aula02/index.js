import http from "http";
import url from "url";

import login from "./login"

const server = http.createServer ((req, res) => {
    //metodo get
    /*if (req.url.includes("login")) {
        let params = url.parse(req.url, true).query;

        console.log(params)
    }*/

    switch (req.url) {
        case "/login":
            login();
            
        break;

    default:
        res.end(JSON.stringify({ mensage: "Nenhuma rota encontrada"}));                      
        break;
    }

});

server.listen(2000, () => {
    console.log("Servidor rodando na porta: 2000");
});