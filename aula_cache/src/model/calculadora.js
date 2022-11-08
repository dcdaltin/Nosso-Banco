class Calculadora{
    constructor(){}
    
    soma (num1, num2){
        return num1+num2
    }

    fatorial (num){
        let resultado = 1n
        for(let i = 1n; i <= num; i++){
            resultado = resultado * i
        }
        return num == 0 ? 1 : resultado
    }
}

module.exports = Calculadora
