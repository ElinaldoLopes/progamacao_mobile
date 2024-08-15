import express from "express";
import routes from "./routes.js";

const app = express();

app.use("/api", routes);

const port = 2000;

app.listen(port, () => {
    console.log (`Aplicação rodando na porta: ${port}`);

});