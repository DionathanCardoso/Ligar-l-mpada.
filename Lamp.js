const lampada = document.getElementById("lamp");
const fundo = document.getElementsByTagName('body');
let turnOn = document.getElementById('turnOn');

function turnOnOrturnOff() {
    if (turnOn.innerHTML === 'Ligar') {
        lampada.src = './img/ligada.jpg';
        turnOn.innerHTML = "Desligar";
    }else{
        lampada.src = './img/desligada.jpg';
        turnOn.innerHTML = "Ligar";
    };
}

function LampadaQuebrada(){
   
   lampada.src = "./img/quebrada.jpg"
}

function LampadaInteira(){
    lampada.src = "./img/desligada.jpg"
    turnOn.innerHTML = "Ligar"
}

turnOn.addEventListener("click", turnOnOrturnOff);
lampada.addEventListener("dblclick",LampadaQuebrada);
lampada.addEventListener("mouseleave",LampadaInteira)