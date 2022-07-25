var numeroInput = document.getElementById('inputNumero') // Numero do Input 
var selectList = document.getElementById('flista') // Select
var res = document.getElementById('divRes') // Div que será mostrado o resultado

let valores = [] // Vetor que irá receber os dados

function isNumero(n){  // Função para verificar de numeroInput é numerico e esta entre 0 e 100
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){ // Função para verificar se o vlor esta presente na lista
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function adicionarNumero(){ //Função para adicionar os numeros
    if(isNumero(numeroInput.value) && !inLista(numeroInput.value, valores)) { 
        // Verificar se o valor é numero e ja esta na lista
        valores.push(Number(numeroInput.value))  // Adicionando o valor no vetor

        // Criando a option para que o valor seja mostrado na tela "select"
        var item = document.createElement('option')
        item.text = `O valor ${Number(numeroInput.value)} foi adicionado!`
        selectList.appendChild(item)

        res.innerHTML = ''
    } else {
        // Caso o IF retorne false o alert sera mostrado na tela
        alert('Valor inválido ou ja cadastrado!')
    }
    numeroInput.value = '' // Limpar a caixa do input 
    numeroInput.focus() // Cursor do mouse piscar para digitar
}



function finalizar(){
    if (valores.length == 0) {
        window.alert('Entre com algum valor para continuar!')
    } else {
        valores.sort()  // Organizando o vetor
        somaValores = 0 // Receber a soma dos valores
        maiorValor = 0 // Receber o maior numero dos valores

        for(var i = 0; i < valores.length; i++){
            // For para percorrer todos as posições dos vetores e somar
               somaValores += valores[i]
               if (valores[i] > maiorValor)
               // if para achar o maior valor 
                maiorValor = valores[i]}

               // Exibindo o Resultado na div de Resposta 
               res.innerHTML = 
               `Você cadastradou ${valores.length} valores<br>
               O Maior valor cadastrado foi ${maiorValor}<br>
               O Menor valor cadastrado foi ${valores[0]}<br>
               A soma dos valores resulta em ${somaValores}<br>
               A média os valores é de ${somaValores/valores.length}<br>`
    }
}
