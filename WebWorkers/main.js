const worker = new Worker("calcularQuadrado_worker.js");
const workerTriangulo = new Worker("calcularAreaTriangulo_worker.js");
const workerFatorial = new Worker("fatorialNumeroWorker.js");

worker.addEventListener("message", function(event){
    const square = event.data;
    const resultElement = document.getElementById("resultadoQuadrado");
    resultElement.textContent = square;
});

workerTriangulo.addEventListener("message", function(event){
    const areaTriangulo = event.data;
    const resultElement = document.getElementById("resultadoAreaTriangle");
    resultElement.textContent = areaTriangulo;
});


workerFatorial.addEventListener("message", function(event){
    const fatorialNumber = event.data;
    const resultElement = document.getElementById("resultadoFatorialNumber");
    resultElement.textContent = fatorialNumber;
});



function calculateSquare(){
    const inputElement = document.getElementById("inputNumberSquare");
    const inputNumber = Number(inputElement.value);
    worker.postMessage(inputNumber);
}

function calculateAreaTriangle(){
    workerTriangulo.postMessage({
        base: parseFloat(document.getElementById('inputNumberOneTriangle').value),
        height: parseFloat(document.getElementById('inputNumberTwoTriangle').value)
        }
        );
}

function calculateFatorial(){
    const inputElement = document.getElementById("inputNumberFatorial");
    const inputNumber = Number(inputElement.value);
    workerFatorial.postMessage(inputNumber);
}


