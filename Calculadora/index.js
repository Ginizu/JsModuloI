const entrada1 = prompt ("Digite o primeiro número:")
const entrada2 = prompt ("Digite o segundo número")

const x = parseFloat(entrada1)
const y = parseFloat(entrada2)

const soma = x + y 
const sub = x - y
const multi = x * y
const div = x / y

alert (
    "Resultados \n" +
    "\nAdição: " + soma +
    "\nSubtração: "+ sub +
    "\nMultiplicação: " + multi +
    "\nDivisão: " + div
)