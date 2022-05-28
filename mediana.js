//? Mediana

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

// const lista1 = [
//     100,
//     200,
//     300,
//     500
// ];

const mediana = (lista) => {

    const esPar = (lista) => {
        if(lista.length % 2 == 0){
            return true;
        }else{
            return false;
        }
    }
    
    const mitadLista = parseInt(lista.length / 2);


    if(esPar(lista.length)){
        const elemento1 = lista[mitadLista - 1];
        const elemento2= lista[mitadLista];

        const promedio1y2 = calcularMediaAritmetica(elemento1, elemento2)

        mediana = promedio1y2;
    }else{
        mediana = lista[mitadLista];
    }

}