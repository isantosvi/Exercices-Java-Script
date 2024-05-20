var anoNascimento = Number(prompt("Informe o seu ano de nascimento"));
var idadeAtual = 2024 - anoNascimento;

if (idadeAtual > 16){
  console.log("Voce pode votar.");
}
else
  console.log("Voce não pode votar");