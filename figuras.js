console.log("Hola Bryan");


//Calculo del Cuadrado
console.group("Cuadrado")

//Realiza el calculo del perimetro del Cuadrado
function perimetroCuadrado(lado){

    return lado * 4;
}
//-----------------------------------------------

//Realiza el calculo del area del cuadrado
function areaCuadrado(lado){

    return lado * lado;
}

console.groupEnd("Cuadrado")

//-----------------------------------------------

//Calculo del Triangulo

console.group("Triangulo")

//Realiza el calculo del perimetro del triangulo
function perimetroTriangulo(lado1, lado2, base){

    return lado1 + lado2 + base;
}

//----------------------------------------------

//Realiza el calculo del area del triangulo
function areaTriangulo(altura, base){

    return (altura * base)/2;
}

//----------------------------------------------

//Calculo del Circulo

console.group("Circulo")

//Variables a utlizar
const PI= Math.PI;

//Calculo del diametro del Circulo
function diametroCirculo(radioCirculo){

    return radioCirculo * 2;
}

//---------------------------------------------

//Calculo del perimetro del Circulo
function perimetroCirculo(radioCirculo){
    const diametro = diametroCirculo(radioCirculo);
    return diametro * PI;

}

//---------------------------------------------


//Calculo del area del circulo
function areaCirculo(radioCirculo){

    return (radioCirculo * radioCirculo) * PI;

}

console.groupEnd("Circulo")


//interaccion con HTML
//Calculo de Cuadrado
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);

    
    return document.write("El resultado es:" + perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    
    return document.write("El resultado es:" + area);

}

//Calculo de Triangulo
function calcularPerimetroTriangulo(lado1, lado2, lado3){

    var lado1 = document.getElementById("lado1");
    const lado2 = document.getElementById("lado2");
    const lado3 = document.getElementById("lado3");
    

    const perimetro = perimetroTriangulo(lado1 + lado2 + lado3);

    
    return document.write("El resultado es:" + perimetro);

}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);

    
    return document.write("El resultado es:" + area);

}