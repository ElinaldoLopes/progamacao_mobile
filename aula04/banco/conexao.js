import mysql from "mysql2";

class Conexao {
    constructor(){
        if(!Conexao.instance){
            this.connection = mysql.createConnection({
                host: "localhost",
                user: "dev",//root
                password: "",
            })

            this.connection.connect((err) => {
                if(err) throw err;

                console.log("Conexão com o banco de dados realizada com sucesso!");
            })
            Conexao.instance = this;
            
        }
        return Conexao.instance;
    }

    query(sql, args){
        return new Promise((resolve, reject) => {
            this.connection.query(sql, args, (err, result) => {
                if(err) return reject(err);
                resolve(result);
            });
        });
    }
}

const instance = new Conexao();
Object.freeze(instance);

instance.query("CREATE DATABASE IF NOT EXISTS teste");
instance.query("USE teste");

export default instance;