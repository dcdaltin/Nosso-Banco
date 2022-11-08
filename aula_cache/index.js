const express = require("express")
const router = require("./src/api/rotas")
const app = express()
const port = 8080

app.listen(port, () => console.log("Servidor está rodando"))
app.use("/calculadora", router)