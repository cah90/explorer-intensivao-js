// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

//window.alert("Hello World!")
//alert("Hello World!")

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

// const n1 = Number(prompt("Digite um número:"))
// const n2 = Number(prompt("Digite um número:"))

function sum(n1, n2) {
	const sum = n1 + n2
	return alert(`O resultado da soma é ${sum}`)
}

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número.
// Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

// const value = 10

function isNumber(value) {
	return typeof value === "number"
		? alert("é um número")
		: alert("não é um número")
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string.
// Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

// const value = "Olá"

function isString(value) {
	return typeof value === "string"
		? alert("é uma string")
		: alert("não é uma string")
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano.
// Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

// const value = true

function isBoolean(value) {
	return typeof value === "boolean"
		? alert("é um booleano")
		: alert("não é um booleano")
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

// const n1 = Number(prompt("Digite um número:"))
// const n2 = Number(prompt("Digite um número:"))

function sub(n1, n2) {
	const sub = n1 - n2
	return alert(`O resultado da subtração é ${sub}`)
}

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

// const n1 = Number(prompt("Digite um número:"))
// const n2 = Number(prompt("Digite um número:"))

function multiplication(n1, n2) {
	const multiplication = n1 * n2
	return alert(`O resultado da multiplicação é ${multiplication}`)
}

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

// const n1 = Number(prompt("Digite um número:"))
// const n2 = Number(prompt("Digite um número:"))

function division(n1, n2) {
	const division = n1 / n2
	return alert(`O resultado da divisão é ${division}`)
}

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par.
// Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar.
// Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

// const number = Number(prompt("Digite um número:"))

function isOddOrEven(number) {
	return number % 2 == 0 ? alert("É um número par") : alert("É um número impar")
}

// sum(n1, n2)
// isNumber(value)
// isString(value)
// isBoolean(value)
// sub(n1, n2)
// multiplication(n1, n2)
// division(n1, n2)
// isOddOrEven(number)
