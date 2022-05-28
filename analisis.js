//? Análisis

//!Helpers
//* Saber si el array es par
const esPar = (numero) => {
    return (numero % 2 === 0);
}

//* Calcular la mediana de la lista
const calcularMediaAritmetica = (lista) =>{

    //! reduce recibe una función como argumento y permite sumar cada elemento (o cualquier operación aritmética)
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//!Calculadora de mediana

//* Calcular mediana de salarios
const medianaSalariosMexico = (lista) => {
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;

    }else{
        const personaMitad = lista[mitad];
        return personaMitad
    }
}

//!Mediana General
//*Crear un array salariosMex que solo contenga los salarios
const salariosMex = mexico.map(
    //* Por cada persona que hay en el array mexico va a tomar solamente su salario
    function(persona){
        return persona.salary
    }
);

//* Crear un nuevo array con los salarios ordenados
const salariosMexSorted = salariosMex.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
)

const medianaGeneralMex = medianaSalariosMexico(salariosMexSorted);

//! Mediana del Top 10%

const spliceStart = (salariosMexSorted.length * 90) / 100;
const spliceCount = salariosMexSorted.length - spliceStart;
//* .splice recibe dos argumentos, posición y cuántos elementos cortar
const salarioMexTop10 = salariosMexSorted.splice(spliceStart, spliceCount);

const medianaTop10Mex = medianaSalariosMexico(salariosMexTop10);


console.log({
    medianaGeneralMex,
    medianaTop10Mex
})