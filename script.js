// Dark Mode Toggle
document.querySelector('.butDarkmode').addEventListener('click', function (event) {
    event.preventDefault();
    document.body.classList.toggle('dark-mode');
});

/*INFLAAAAAR*/
function inflarBalao() {
    const imgBalao = document.getElementById("imgBalao");
    let currentWidth = parseFloat(imgBalao.style.width) || 5;

    if (currentWidth >= 20) {
        imgBalao.src = "Explosao.png";
        imgBalao.style.width = "20%";
        document.getElementById("butBalao").disabled = true;
    } else {
        currentWidth += 3;
        imgBalao.style.width = currentWidth + "%";
    }
}
/*Check Num Primo*/
function checkNumPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function checkNumInput() {
    const input = document.getElementById('numInput').value;
    const num = parseInt(input);
    const resultElement = document.getElementById('result');

    if (isNaN(num)) {
        resultElement.textContent = "Por favor, insira um número válido.";
    } else {
        const isPrimeNumber = checkNumPrimo(num);
        resultElement.textContent = isPrimeNumber ? `${num} é primo!` : `${num} não é primo.`;
    }
}
/*CHECK VOGAAAAL*/

function contarVogais() {
    const frase = document.getElementById("input-frase").value.toLowerCase();
    const vogais = "aeiouáéíóúâêîôûàèìòùãõäëïöü";
    let contador = 0;
  
    for (let char of frase) {
        if (vogais.includes(char)) {
            contador++;
        }
    }
  
    document.getElementById("Resultado").innerText = `O número de vogais é: ${contador}`;
}
