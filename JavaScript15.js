var nomeCliente = prompt("Informe o seu nome: ");
var quantidadeResistor = Number(prompt("Informe a quantidade de resistor você comprou: "));
var quantidadeDiodos = Number(prompt("Informe a quantidade de diodos você comprou: "));
var quantidadeTransitores = Number(prompt("Informe a quantidade de transistor você comprou: "));

var resistorDesconto = (quantidadeResistor * 0.70) * (5 / 100);
var diodosDesconto = (quantidadeDiodos * 0.80) * (6 / 100);
var transistoresDesconto = (quantidadeTransitores * 0.95) * (9 /100);

var valorDesconto = resistorDesconto + diodosDesconto + transistoresDesconto;
console.log("Valor desconto:",valorDesconto);

var valorFinal = ((quantidadeResistor * 0.70) + (quantidadeDiodos * 0.80) + (quantidadeDiodos * 0.80) - valorDesconto);
console.log("Valor final: ",valorFinal);
