
let life;
let numberRandom = Math.floor(Math.random() * 100) + 1;
let hits = 0;

const gameOverViuw = document.querySelector(".gameOverText")
const winText = document.querySelector(".winText")
const TextInfo = document.querySelector(".textInfo");
const TotalHits = document.querySelector(".TotalHits");

function validation(e) {
    e.preventDefault();
    const NumberSelect = document.querySelector("#numberSelect").value;

    document.querySelector("#numberSelect").value = "";

    if(Number.isNaN(NumberSelect) || NumberSelect > 100 || NumberSelect < 1) {
        alert("debes de ingresar un numero de 1 al 100")
        return;
    }

    if (NumberSelect == numberRandom) {
       hits++;
       localStorage.setItem("hits", hits)
       updateHits()
       winText.classList.remove("inactive")
       return;
    } else if(NumberSelect > numberRandom){
        TextInfo.innerHTML = "tu numero es mayor al numero secreto";
    }else{
        TextInfo.innerHTML = "tu numero es menor al numero secreto";
    }

    life--
    updateLifes()
    if (life == 0) {
        gameOverViuw.classList.remove("inactive");
    }
};

function updateLifes() {
    let lifeTotal = document.querySelector(".totalLifes");
    lifeTotal.innerHTML = `${life}`;
}
function updateHits() {
    TotalHits.innerHTML = `Total de Aciertos: ${hits}`
}
function generateNumberRandom() {
    return Math.floor(Math.random() * 100) + 1;
}

const gameVium = document.querySelector(".game");
const optionViuw = document.querySelector(".optionOfGame");


function optionEasy() {
    life = 10;
    gameVium.classList.remove("inactive");
    optionViuw.classList.add("inactive");
    gameOverViuw.classList.add("inactive");
    winText.classList.add("inactive")
    document.querySelector("#numberSelect").value = "";
    TextInfo.innerHTML = "";
    updateLifes()
    updateHits()
}
function optionHard() {
    life = 5;
    gameVium.classList.remove("inactive");
    optionViuw.classList.add("inactive");
    gameOverViuw.classList.add("inactive");
    winText.classList.add("inactive")
    document.querySelector("#numberSelect").value = "";
    TextInfo.innerHTML = "";
    updateLifes()
    updateHits()
}
function optionChange(){
    gameVium.classList.add("inactive");
    optionViuw.classList.remove("inactive")
    numberRandom = generateNumberRandom()
}

window.addEventListener("DOMContentLoaded", () => {
    updateLifes()
    hits = localStorage.getItem("hits") || 0;
})

