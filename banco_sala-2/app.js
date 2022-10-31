import express from 'express';
import  { config } from 'dotenv';


import { rotaPrincipal } from './src/aplicacao/routes/routes.js';

const app = express();
app.use(rotaPrincipal);
//const PORT = config().parsed.PORT;

app.listen(process.env.PORT, () => {
    console.log(`Acessar http://localhost:${process.env.PORT}/paginainicial \r\n
    Servidor executando na porta ${process.env.PORT}.`)
})