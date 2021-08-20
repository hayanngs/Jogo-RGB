var root = document.documentElement;
var bola = [];
var truu;

var confirm = false;

var textoCor = document.getElementById("textoCor");
var texto = document.getElementById("p_text");
var resultado = document.getElementById("resultado");
var acertos = 0;

var bola_0 = document.getElementById("bola_0").addEventListener('click', verificaBola0);
var bola_1 = document.getElementById("bola_1").addEventListener('click', verificaBola1);
var bola_2 = document.getElementById("bola_2").addEventListener('click', verificaBola2);
var bola_3 = document.getElementById("bola_3").addEventListener('click', verificaBola3);
var bola_4 = document.getElementById("bola_4").addEventListener('click', verificaBola4);
var bola_5 = document.getElementById("bola_5").addEventListener('click', verificaBola5);

var btn = document.getElementById("btn").addEventListener("click", start);

start();

function start() {
    setColor();
    acertos = 0;
    resultado.textContent = acertos.toString();
}

function setColor() {
    var letters = '0123456789ABCDEF';
    while(bola.length){
        bola.pop();
    }
    for (var i = 0; i < 6; i++) {
        bola.push('#');
        for (var j = 0; j < 6; j++) {
            bola[i] += letters[Math.floor(Math.random() * 16)];
        }
    }
    truu = bola[Math.floor(Math.random() * 6)];

    root.style.setProperty('--cor0', bola[0]);
    root.style.setProperty('--cor1', bola[1]);
    root.style.setProperty('--cor2', bola[2]);
    root.style.setProperty('--cor3', bola[3]);
    root.style.setProperty('--cor4', bola[4]);
    root.style.setProperty('--cor5', bola[5]);
    root.style.setProperty('--cor6', '#FFFFFF');
    textoCor.textContent = truu

    confirm = true;
}

function verificaBola(i) {

    if (confirm) {
        if (bola[i] === truu)
        {
            confirm = false;
            texto.textContent = "CORRECT!";
            acertos++;
            resultado.textContent = acertos.toString();
            root.style.setProperty('--cor6', truu);
            var timer = setTimeout(function() {
                texto.textContent = "PICK A COLOR";
                setColor();
            }, 1500)
        }
        else
        {
            texto.textContent = "WRONG ANSWER, TRY AGAIN!";
            resultado.textContent = acertos.toString();
            var timer = setTimeout(function() {
                texto.textContent = "PICK A COLOR";
            }, 1500)
        }
    }
}

function verificaBola0() {
    verificaBola(0);
}

function verificaBola1() {
    verificaBola(1);
}

function verificaBola2() {
    verificaBola(2);
}

function verificaBola3() {
    verificaBola(3);
}

function verificaBola4() {
    verificaBola(4);
}

function verificaBola5() {
    verificaBola(5);
}