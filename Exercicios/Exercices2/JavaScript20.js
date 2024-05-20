var valor1 = Number(prompt("Informe um valor: "));
var valor2 = Number(prompt("Informe um valor: "));
var valor3 = Number(prompt("Informe um valor: "));

if (valor1 < valor2 && valor1 < valor3 && valor2 < valor3) {
  console.log(`Segue numeros: ${valor1} , ${valor2}, ${valor3}.`);
}
else if (valor1 < valor2 && valor1 < valor3 && valor3 < valor2) {
  console.log(`Segue numeros: ${valor1} , ${valor3}, ${valor2}.`);
}
else if (valor2 < valor1 && valor2 < valor3 && valor1 < valor3) {
  console.log(`Segue numeros: ${valor2}, ${valor1}, ${valor3}`);
}
else if (valor2 < valor1 && valor2 < valor3 && valor3 < valor1) {
  console.log(`Segue numeros: ${valor2}, ${valor3}, ${valor1}`);
}
else if( valor3 < valor1 && valor3 < valor2 && valor1 < valor2){
  console.log(`Segue numeros: ${valor3}, ${valor1}, ${valor2}.`);
}
else if(valor3 < valor1 && valor3 < valor2 && valor2 < valor1){
  console.log(`Segue numeros: ${valor3}, ${valor2}, ${valor1}.`);
}