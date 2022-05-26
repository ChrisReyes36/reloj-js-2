const horaHTML = document.getElementById("hora");
const minutoHTML = document.getElementById("minuto");
const segundoHTML = document.getElementById("segundo");
const tipoHTML = document.getElementById("tipo");

const mostrarHora = () => {
    const fecha = new Date();
    let hora = fecha.getHours();
    const tipo = hora >= 12 ? "PM" : "AM";
    hora = hora === 0 ? 12 : hora;
    hora = hora > 12 ? hora - 12 : hora;
    let minuto = fecha.getMinutes();
    let segundo = fecha.getSeconds();

    horaHTML.textContent = String(hora).padStart(2, "0");
    minutoHTML.textContent = String(minuto).padStart(2, "0");
    segundoHTML.textContent = String(segundo).padStart(2, "0");
    tipoHTML.textContent = tipo;

    setTimeout(mostrarHora, 1000);
};

document.addEventListener("DOMContentLoaded", mostrarHora);
