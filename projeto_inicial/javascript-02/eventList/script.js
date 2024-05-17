// 
const quantidadeSubtotal = document.getElementById("quantidade-subtotal")
const valorSubtotal = document.getElementById("valor-subtotal")
const textoValorProduto = document.querySelector("#produto-01 p")
const botaoAdicionar = document.getElementById("btn-adicionar-produto-01")
const inputQtdProduto = document.querySelector("#quantidade-produto-01")
const botaoSubtrair = document.getElementById("btn-subtrair-produto-01")


//Definiçã de variavéis
const valorDoProduto = 11.66;
const subtotalInfo = {
    quantidade: 1,
    valor: 11.66,
};

//Manipulação dos elementos
valorSubtotal.innerText = subtotalInfo.valor;
textoValorProduto.innerText = textoValorProduto.innerText + valorDoProduto

function atualizarSubtotal(){
    quantidadeSubtotal.innerText = subtotalInfo.quantidade + " itens";
    valorSubtotal.innerText = subtotalInfo.valor.toFixed(2) 
}

atualizarSubtotal()

//---------------------function--------------------------------
function adicionarUm() {
    inputQtdProduto.value = Number(inputQtdProduto.value) + 1
    subtotalInfo.quantidade = subtotalInfo.quantidade + 1
    subtotalInfo.valor = subtotalInfo.valor + valorDoProduto
    atualizarSubtotal()
}
    
function subtrairUm() {
    inputQtdProduto.value = Number(inputQtdProduto.value) - 1;
    subtotalInfo.quantidade = subtotalInfo.quantidade - 1
    subtotalInfo.valor = subtotalInfo.valor - valorDoProduto;
    
    resetInput()
    atualizarSubtotal();
}

function resetInput(){

    if (inputQtdProduto.value < 0){
        inputQtdProduto.value = 0
        subtotalInfo.quantidade = 0
        subtotalInfo.valor = 0 
    }

}


// Definir quando a manipulação dos elementos por evento devem acontecer

botaoAdicionar.addEventListener("click", adicionarUm)
botaoSubtrair.addEventListener("click", subtrairUm)

