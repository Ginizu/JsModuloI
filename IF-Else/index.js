const idade = prompt("Qual sua idade?")

if (idade > 18) {
    alert("Você é maior de idade.")
} else if ( idade > 12) {
    alert("Você é menor de idade.")
} else if ( idade < 12) {
    alert("Você é criança.")
}

const resultado = (6 === 6) ? "Verdadeiro" : "Falso"
console.log(resultado)