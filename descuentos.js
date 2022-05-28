//? Descuentos y porcentaje

// const precioOriginal = 100;
// const descuento = 15;

const calcularPrecioConDescuento = (precio, descuento) => {
    const porcentajePrecioConDescuento = 100 - descuento; 
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100; 
    return precioConDescuento;
}



//! Funciones para HTML

const calculaPrecioFinal = () => {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const finalValue = calcularPrecioConDescuento(priceValue, discountValue);
 
    const result = document.getElementById("resultP")
    result.innerText = "El precio con descuento es $" + finalValue;
}