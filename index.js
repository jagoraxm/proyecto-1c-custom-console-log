
function ok(mensaje) {
    const estilos = 'background-color: green; color: white; font-size: 22px; display: block; text-align:center; text-decoration: underline;';
    mostrarLog(mensaje, estilos);
}

function info(mensaje) {
    const estilos = 'background-color: #80bfff; color: gray; font-size: 22px; display: block; text-align:center; text-decoration: underline;';
    mostrarLog(mensaje, estilos);
}

function error(mensaje) {
    const estilos = 'background-color: #ff704d; color: black; font-size: 22px; display: block; text-align:center; text-decoration: underline;';
    mostrarLog(mensaje, estilos);
}

function aviso(mensaje) {
    const estilos = 'background-color: #ffcc80; color: black; font-size: 22px; display: block; text-align:center; text-decoration: underline;';
    mostrarLog(mensaje, estilos);
}

function mostrarLog(mensaje, estilos) {
    console.log('%c%s', estilos, mensaje);
}

module.exports = {
    ok, 
    info, 
    error, 
    aviso
};
