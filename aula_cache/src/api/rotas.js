const calculadora = require("../controller/calculaController")
const { Router } = require("express")
const NodeCache = require( "node-cache" );
const Cache = new NodeCache({ stdTTL: 10 });
const router = Router()
const calc = new calculadora()

router.get("/soma/:num1/:num2", 
    (req, res) => {
        const num1 = Number(req.params["num1"])
        const num2 = Number(req.params["num2"])
        return res.send({result: calc.soma(num1, num2)})
    })


router.get("/fatorial/:num", 
    (req, res) => {
        const num = Number(req.params["num"])
        return res.send({result: calc.fatorial(num).toString()})
    })

module.exports = router