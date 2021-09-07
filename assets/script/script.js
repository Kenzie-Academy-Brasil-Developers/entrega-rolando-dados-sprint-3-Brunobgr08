const destino = document.getElementById("exibeResultados");
const containerResult = document.createElement("Div");
const secaografico = document.getElementById("exibeGrafico");

let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let dado1 = 0;
let dado2 = 0;
let somaDados = 0;

for (let i = 0; i < 1000; i++){
    dado1 = numRandom();
    dado2 = numRandom();
    somaDados = dado1 + dado2;
    verificaContagem(somaDados);
}

function numRandom(){
    return Math.floor(Math.random() * 6 + 1)
}

function verificaContagem(somaDados){
    for (let i = 2; i <= 12; i++){
        if (somaDados === i){
            count[i-2]++;
        }
    }
}

function criarGrafico(arrayRef){

    let grafTitle = document.createElement("h3");
    grafTitle.className = "grafTitle";
    grafTitle.innerText = "Gráfico de Frequência de Soma";

    let containerGrafSub = document.createElement('div');
    containerGrafSub.className = "contGrafSub";

    let containerGraf = document.createElement("Div");
    containerGraf.className = "containerGraf";

    let containerSubTit = document.createElement("Div");
    containerSubTit.className = "containerSubTit";

    containerGrafSub.appendChild(containerGraf);
    containerGrafSub.appendChild(containerSubTit);
    secaografico.appendChild(grafTitle);
    secaografico.appendChild(containerGrafSub);

    for (let i = 2; i <= arrayRef.length+1; i++){

        let valorSomaBar = document.createElement("Div");
        valorSomaBar.innerText = i;
        valorSomaBar.className = "divSomaBar";

        let freqBar = document.createElement("Div");
        freqBar.innerText = arrayRef[i-2];
        freqBar.style.height = `${arrayRef[i-2]}px`;
        freqBar.className = "divFreqBar";

        containerGraf.appendChild(freqBar);
        containerSubTit.appendChild(valorSomaBar);

    }

}

function mostrarResultados(soma, freq){

    let valorSoma = document.createElement("Div");
    valorSoma.innerText = soma;
    valorSoma.className = "divSoma";

    let freqSoma = document.createElement("Div");
    freqSoma.innerText = freq;
    freqSoma.className = "divFreq";

    containerResult.appendChild(valorSoma);
    containerResult.appendChild(freqSoma);
}

function listarEvento(arrayCount){

    containerResult.className = "containerResult";

    let newResultTitle = document.createElement("h3");
    newResultTitle.className = "resultTitle";
    newResultTitle.innerText = "Frequência de Soma dos Dados";

    let valorSoma = document.createElement("Div");
    valorSoma.innerText = "Soma dos Dados";
    valorSoma.className = "divHeader";

    let freqSoma = document.createElement("Div");
    freqSoma.innerText = "Frequência da Soma";
    freqSoma.className = "divHeader";

    containerResult.appendChild(valorSoma);
    containerResult.appendChild(freqSoma);

    for (let i = 2; i <= arrayCount.length+1; i++){
        mostrarResultados(i + " : ", arrayCount[i-2]);
    }


    destino.appendChild(newResultTitle);
    destino.appendChild(containerResult);
}

listarEvento(count);

criarGrafico(count);

