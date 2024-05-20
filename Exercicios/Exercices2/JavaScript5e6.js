var temperaturaCorporal = Number(prompt("Informe a sua temperatura corporal:"));

if(temperaturaCorporal >= 36 && temperaturaCorporal <= 36.7){
  console.log("Você não está com febre");
}
else if(temperaturaCorporal > 36.7){
  console.log("Você está com febre");
}
else
  console.log("Você está com hipotermia");