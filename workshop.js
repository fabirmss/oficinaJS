
function somar(){

    var primeiroValor = Number(document.querySelector('#valor1').value);
    var segundoValor = Number(document.querySelector('#valor2').value);

    valorTotal = primeiroValor + segundoValor;
    mostrarResultado(valorTotal);

}

function subtrair(){

    var primeiroValor = Number(document.querySelector('#valor1').value);
    var segundoValor = Number(document.querySelector('#valor2').value);

    valorTotal = primeiroValor - segundoValor;
    mostrarResultado(valorTotal);

}

function multiplicar(){
    var primeiroValor = Number(document.querySelector('#valor1').value);
    var segundoValor = Number(document.querySelector('#valor2').value);

    valorTotal = primeiroValor * segundoValor;
    mostrarResultado(valorTotal);
}

function dividir(){
    var primeiroValor = Number(document.querySelector('#valor1').value);
    var segundoValor = Number(document.querySelector('#valor2').value);

    if (segundoValor == 0){
        valorTotal = "Nao pode ser dividido";
    }else{
        valorTotal = primeiroValor / segundoValor;
    }

    mostrarResultado(valorTotal);
}

function exponenciar(){
    
}
function mostrarResultado(valorTotal){

    var tagResult =  document.querySelector('#resultado');
    tagResult.removeChild(tagResult.childNodes[0]);
    var textoASerAdc = document.createTextNode(valorTotal);
    tagResult.appendChild(textoASerAdc);
    valorTotal.appendChild(tagResult);
}

