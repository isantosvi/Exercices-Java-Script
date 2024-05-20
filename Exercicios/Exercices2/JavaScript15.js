var tempMatutino = Number(prompt("Informe a temperatura do período matutino:"))
var tempVespertino = Number(prompt("Informe a temperatura do período vespertino: "));
var tempNorturno= Number(prompt("Informe a temperatua do período nortuno:"));

if(tempMatutino > tempVespertino && tempMatutino > tempNorturno){
  console.log("A temperatura durante o período Matutino foi a mais quente");
}
else if(tempVespertino > tempMatutino && tempVespertino > tempNorturno){
  console.log("A temperatura durante o período Vespertino foi a mais quente");
}
else if(tempNorturno > tempMatutino && tempNorturno > tempVespertino){
  console.log("A temperatura durante o período norturno foi a mais quente");
}