import express from 'express';
import  { config } from 'dotenv';
import { createClient } from 'redis';
import { rotaPrincipal } from './src/application/routes/routes.js';

const client = createClient();

//client.on('error', (err) => console.log('Redis Client Error', err));


await client.connect();

client.on('connect', () => {
    console.log('REDIS READY');
});
 
client.on('error', (err) => {
    console.log('REDIS ERROR', err);
});

await client.set('key', 'value');
const value = await client.get('key');
await client.disconnect();



const app = express();
app.use(rotaPrincipal);
const PORT = config().parsed.PORT;

app.listen(process.env.PORT, () => {
    console.log(`Acessar http://localhost:${process.env.PORT}/paginainicial \r\n
    Servidor executando na porta ${process.env.PORT}.`)
});

