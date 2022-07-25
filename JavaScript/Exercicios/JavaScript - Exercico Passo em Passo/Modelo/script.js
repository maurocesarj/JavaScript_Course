function calcular(){
    var inicio = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('pas')
    var res = document.getElementById('res')
    res.innerHTML = ''
     
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert(' [ERROR] Você deve entrar com todos os valores!')

    } else {
        res.innerHTML = ''
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert(' [ERROR] Passo inválido! Considerando PASSO = 1')
            p = 1
        }
        if (i < f) {
            // Contagem Crescente
            for(var c = i; c <= f; c += p) {
                res.innerHTML += `✧ ${c}`
            }
        } else {
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += `✧ ${c}`
            }
        }
    }
}
