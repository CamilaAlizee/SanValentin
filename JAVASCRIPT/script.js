const fulImgBox = document.getElementById("fulImgBox");
const fulImg = document.getElementById("fulImg");
const fulVid = document.getElementById("fulVid");


function validarLogin(){
    let usuario= document.getElementById("usuario").value.trim();
    let contrasena= document.getElementById("contrasena").value.trim();

    let nombresValidos = ["Rei", "Jason" , "Hasan", "Byron"];
    let claveCorrecta = "2808";

    if (nombresValidos.includes(usuario) && contrasena === claveCorrecta) {
        window.location.href ="PAGINAS/HOME.html";
    }
    else{
        document.getElementById("imgModal").style.display = "flex";

    }
}

function closeImg() {
    document.getElementById("imgModal").style.display = "none";
}



function cerrarSesion() {
    window.location.href = "../index.html";
}

document.addEventListener("DOMContentLoaded", function () {
    function actualizarTiempo() {
        const fechaInicio = new Date("2024-08-28T04:41:00").getTime();
        const ahora = new Date().getTime();
        const diferencia = ahora - fechaInicio;

        const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
        const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

        document.getElementById("dias").textContent = dias;
        document.getElementById("horas").textContent = horas;
        document.getElementById("minutos").textContent = minutos;
        document.getElementById("segundos").textContent = segundos;
    }

    actualizarTiempo();
    setInterval(actualizarTiempo, 1000);
});

document.addEventListener("DOMContentLoaded", function () {
    function iniciarCarrusel(idCarrusel) {
        const imagenes = document.querySelectorAll(`#${idCarrusel} img`);
        let indiceActual = 0;

        function cambiarImagen() {
            imagenes[indiceActual].classList.remove("activa");
            indiceActual = (indiceActual + 1) % imagenes.length;
            imagenes[indiceActual].classList.add("activa");
        }

        setInterval(cambiarImagen, 5000);
    }

    iniciarCarrusel("carruselIzquierdo");
    iniciarCarrusel("carruselDerecho");
});





function openFullImg(reference) {
    fulVid.style.display = "none";
    fulImg.style.display = "block";
    fulImgBox.style.display = "flex";
    fulImg.src = reference;
}

function openFullVid(element) {
    fulImg.style.display = "none"; 
    fulVid.style.display = "block"; 
    fulImgBox.style.display = "flex";
    fulVid.src = element.getAttribute("data-video");
    fulVid.play();
}

fulImgBox.addEventListener("click", function (e) {
    if (e.target !== fulImg && e.target !== fulVid) {
        fulImgBox.style.display = "none";
        fulVid.pause(); 
        fulVid.src = "";
    }
});

function abrirCarta() {
    document.querySelector(".valentines_card").classList.add("abierta");
}