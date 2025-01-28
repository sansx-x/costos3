function calcularCosto() {
    // Obtener valores de los campos de entrada
    const precioHuevo = parseFloat(document.getElementById('precioHuevo').value);
    const cantidadHuevo = parseFloat(document.getElementById('cantidadHuevo').value);
    const precioAzucar = parseFloat(document.getElementById('precioAzucar').value);
    const cantidadAzucar = parseFloat(document.getElementById('cantidadAzucar').value);
    const precioColorante = parseFloat(document.getElementById('precioColorante').value);
    const cantidadColorante = parseFloat(document.getElementById('cantidadColorante').value);
    const precioEsencia = parseFloat(document.getElementById('precioEsencia').value);
    const cantidadEsencia = parseFloat(document.getElementById('cantidadEsencia').value);
    const precioVinagre = parseFloat(document.getElementById('precioVinagre').value);
    const cantidadVinagre = parseFloat(document.getElementById('cantidadVinagre').value);

    // Calcular costos individuales
    const costoHuevo = precioHuevo * cantidadHuevo;
    const costoAzucar = (precioAzucar / 1000) * cantidadAzucar;
    const costoColorante = (precioColorante / 1000) * cantidadColorante;
    const costoEsencia = (precioEsencia / 1000) * cantidadEsencia;
    const costoVinagre = (precioVinagre / 1000) * cantidadVinagre;

    // Calcular costo total
    const costoTotal = costoHuevo + costoAzucar + costoColorante + costoEsencia + costoVinagre;

    // Mostrar resultado
    document.getElementById('resultado').textContent = `Costo Total: ${costoTotal.toFixed(2)} Bs`;
}``


const respuesta = {
    name: 'jose',
    ok: false,
    cel:  3892398932
}