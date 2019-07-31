
var A = parseInt(prompt("Digite aqui o valor de A: "));
var B = parseInt(prompt("Digite aqui o valor de B: "));
var C = parseInt(prompt("Digite aqui o valor de C: "));

if ((A+B>C) && (A+C>B) && (B+C>A)) {
	document.write("Estes valores formam um Triângulo!");
}

//if ((A+B===C) && (A+C===B) && (B+C===A)) {
	//document.write("Estes valores formam um Triangulo Equilátero");
//}
//if ((A+B===C) && (A+C===B) && (B+C!==A)) {
	//document.write("Estes valores formam um Triangulo Isósceles");
//}
//if ((A+B!==C) && (A+C!==B) && (B+C!==A)) {
	//document.write("Estes valores formam um Triangulo Escaleno");
//}
else {
	document.write("Estes valores NÃO formam um Triângulo!");
}




























//Se ( x+y>z e x+z>y e y+z>x ) então;

//Escreva ( ‘formar um triangulo’ );

//Senão se( x+y=z e x+z=y e y+z=x )então;

//Escreva ( ‘triangulo eqüilátero’ );

//Senão se ( x+y=z e x+z=y e y+z<>x )então;

//Escreva ( ‘triangulo Isóscelos’ );

//Senão se ( x+y<>z e x+z<>y e y+z<>x )então;

//Escreva ( ‘triangulo Escaleno’ );