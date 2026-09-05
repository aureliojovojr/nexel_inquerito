function fujao() {
    var btnNao = document.getElementById("nao");
    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;

    var maxX = larguraJanela - btnNao.offsetWidth;
    var maxY = alturaJanela - btnNao.offsetHeight;
    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);

    btnNao.style.left = aleatorioX + "px";
    btnNao.style.top = aleatorioY + "px";
}

let sim = document.getElementById("sim");
let mensagem = document.getElementById("mensagem");

sim.addEventListener("click", function () {

    // Mostra a mensagem
    mensagem.style.display = "block";

    mensagem.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
    // Espera 2 segundos e abre o vídeo
    setTimeout(function () {
        window.location.href = "https://youtu.be/fKk3kf_CMYE?si=qOWLrlyCLDR73Ty3";
    }, 2000);

});

