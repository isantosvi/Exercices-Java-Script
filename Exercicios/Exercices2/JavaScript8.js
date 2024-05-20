var valor1 = Number(prompt("Informe um valor: "));

if( valor1 % 3 == 0 && valor1 % 2 == 0){
  console.log("O valor é divisível por 3 e também é par.");
}
else ( valor1 % 3 == 0  && !valor1 % 2 == 0){
  console.log("O valor em questão é divisível por 3 e é ímpar.")
}