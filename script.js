
document.addEventListener("DOMContentLoaded", () => {
    const image = document.getElementById("imagem");


    image.onmouseover = function(){
        image.style.height = "450px";
    }
    image.onmouseout = function(){
        image.style.height = "400px"
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("button");

    botao.onmouseover = function () {
        botao.style.cursor = "pointer";    
        botao.style.opacity = "0.6";
    }
    botao.onmouseout = function () {
        botao.style.cursor = "auto";
        botao.style.opacity = "1";
    }
});

function redirectToWhatsApp() {    
    const phoneNumber = '5515996800399'; 
    const message = 'Olá, gostaria de ter um site de portifólio!'; 
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}


