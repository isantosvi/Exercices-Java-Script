var produto1 = Number(prompt("Informe o valor do produto: "));
var produto2 = Number(prompt("Informe o valor do produto: "));
var produto3 = Number(prompt("Informe o valor do produto: "));

if( produto1 < produto2 && produto1 < produto3){
  console.log("O produto 1 é  produto mais barato.")
}
else if( produto2 < produto1 && produto2 < produto3){
  console.log("O produto 2 é o mais barato.")
}
else if (produto3 < produto1 && produto3 < produto2){
  console.log("O produto 3 é o mais barato.")
}