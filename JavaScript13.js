var valorAdquiridoLoja = Number(prompt("Informe o valor do produto adquirido na loja:"));

var percentualLucro= Number(prompt("Informe o percenual de lucro desejado:"));

var valorFinal = ((valorAdquiridoLoja * percentualLucro) / 100) + valorAdquiridoLoja;
console.log(valorFinal);