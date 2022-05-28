//? Código del cuadrado

const perimetroCuadrado = lado => lado * 4;

const areaCuadrado = lado => lado * lado;


//*? Código del triángulo

const perimetroTriangulo = (lado1, lado2, base) => {
    const num1 = Number(lado1)
    const num2 = Number(lado2)
    const num3 = Number(base)
    return num1 + num2 + num3
};

const areaTriangulo = (base, altura) => (base * altura) / 2;

//? Código del triángulo isósceles

const alturaTriangulo = (lados, base) => {
    altura = Math.sqrt( (lados * lados) - ((base * base) / 4) );
    return altura;
}


//? Código del círculo

//Diámetro
const diametroCirculo = radio => radio * 2;

//PI
const PI = Math.PI;

//Circunferencia
const perimetroCirculo = (radio) => {
    const diametro = diametroCirculo(radio);
    return diametro * PI
}

//Área
const areaCirculo = (radio) => radio * radio * PI


//! Funciones para HTML

    //? Cuadrado
const calcularPerimetroCuadrado = () =>{
    const input = document.getElementById('inputCuadrado');
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

const calcularAreaCuadrado = () =>{
    const input = document.getElementById('inputCuadrado');
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

    //? Triángulo
    const calcularPerimetroTriangulo = () =>{
        const input1 = document.getElementById('inputTriangulo1');
        const input2 = document.getElementById('inputTriangulo2');
        const base = document.getElementById('inputTriangulo3');
        const value1 = input1.value;
        const value2 = input2.value;
        const value3 = base.value;
    
        const perimetro = perimetroTriangulo(value1, value2, value3);
        alert(perimetro);
    }
    
    const calcularAreaTriangulo = () =>{
        const base = document.getElementById('inputTriangulo3');
        const altura = document.getElementById('inputTriangulo4');
        const value1 = base.value;
        const value2 = altura.value
    
        const area = areaTriangulo(value1, value2);
        alert(area);
    }

    //? Tríangulo isósceles

    const calcularAlturaTriangulo = () => {
        const lados = document.getElementById('inputTrianguloI1');
        const base = document.getElementById('inputTrianguloI2');
        const value1 = lados.value;
        const value2 = base.value;

        const altura = alturaTriangulo(value1, value2);
        alert(altura);
    }

    //? Círculo
    const calcularPerimetroCirculo = () =>{
        const input = document.getElementById('inputCirculo');
        const value = input.value;
    
        const perimetro = perimetroCirculo(value);
        alert(perimetro);
    }
    
    const calcularAreaCirculo = () =>{
        const input = document.getElementById('inputCirculo');
        const value = input.value;
    
        const area = areaCirculo(value);
        alert(area);
    }

    const calcularDiametroCirculo = () =>{
        const input = document.getElementById('inputCirculo');
        const value = input.value;
    
        const area = diametroCirculo(value);
        alert(area);
    }