//? Promedio

const lista1 = [
    100,
    200,
    300,
    500
];




const calcularMediaAritmetica = (lista) =>{
    // let sumaLista = 0;

    // for (let i = 0; i < lista.length; i++){
    //     sumaLista += lista[i];
    // }

    //! reduce recibe una función como argumento y permite sumar cada elemento (o cualquier operación aritmética)
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}