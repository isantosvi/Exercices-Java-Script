var medidasTriangulo1 = Number(prompt("Informe a medida do lado A do triangulo: "));
var medidasTriangulo2 = Number(prompt("Informe a medida do lado B do triangulo: "));
var medidasTriangulo3 = Number(prompt("Informe a medida do lado C do triangulo: "));


if(medidasTriangulo1 == medidasTriangulo2 ){
  console.log("Triangulo Isóceles")
}
 else if(medidasTriangulo1 == medidasTriangulo2 == medidasTriangulo3){
   console.log("Triangulo Equilátero");
 }
else if (medidasTriangulo1 != medidasTriangulo2 != medidasTriangulo3){
  console.log("Triangulo Escaleno")
}