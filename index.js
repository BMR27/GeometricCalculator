console.log("Hola Bryan");


//Calculo del Cuadrado
console.group("Cuadrado")

//Realiza el calculo del perimetro del Cuadrado
function perimetroCuadrado(lado) {

    return lado * 4;
}
//-----------------------------------------------

//Realiza el calculo del area del cuadrado
function areaCuadrado(lado) {

    return lado * lado;
}

console.groupEnd("Cuadrado")

//-----------------------------------------------

//Calculo del Triangulo

console.group("Triangulo")

//Realiza el calculo del perimetro del triangulo
function perimetroTriangulo(lado1, lado2, lado3, base) {
    console.log('base', base);
    return lado1 + lado2 + lado3 + base;
}

//----------------------------------------------

//Realiza el calculo del area del triangulo
function areaTriangulo(altura, base) {

    return (altura * base) / 2;
}

//----------------------------------------------

//Calculo del Circulo

console.group("Circulo")

//Variables a utlizar
const PI = Math.PI;

//Calculo del diametro del Circulo
function diametroCirculo(radioCirculo) {

    return radioCirculo * 2;
}

//---------------------------------------------

//Calculo del perimetro del Circulo
function perimetroCirculo(radioCirculo) {
    const diametro = diametroCirculo(radioCirculo);
    return diametro * PI;

}

//---------------------------------------------


//Calculo del area del circulo
function areaCirculo(radioCirculo) {

    return (radioCirculo * radioCirculo) * PI;

}

console.groupEnd("Circulo")


//interaccion con HTML
//Calculo de Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);


    return document.write("El resultado es:" + perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);


    return document.write("El resultado es:" + area);

}

//Calculo de Triangulo
function calcularPerimetroTriangulo(lado1, lado2, lado3) {

    var calculoLado1 = document.getElementById("lado1").value;
    var calculoLado2 = document.getElementById("lado2").value;
    var calculoLado3 = document.getElementById("lado3").value;
    var base = document.getElementById("base").value;

    console.log('base', base);
    console.log(parseInt(calculoLado1), parseInt(calculoLado2), parseInt(calculoLado3))

    const perimetro = perimetroTriangulo(parseInt(calculoLado1), parseInt(calculoLado2), parseInt(calculoLado3), parseInt(base));

    console.log(parseInt(calculoLado2))
    console.log(perimetro)

    const result = document.getElementById("resultado");
    result.innerHTML = "El resultado es:" + perimetro;
    //return document.write("El resultado es:" + perimetro);

}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);


    return document.write("El resultado es:" + area);

}