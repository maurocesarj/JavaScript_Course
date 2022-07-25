function tabuadar(){
    var numero = document.getElementById('num')
    var tab = document.getElementById('seltab')
    if (numero.value == '') {
        window.alert(' [ERROR] Você deve entrar com algum valor numerico!')
    } else {
        var i = Number(numero.value)
        var contator = 1
        while (contator <= 10){
            var item = document.createElement('option')
            item.text = `${i} x ${contator} = ${i*contator}`
            tab.appendChild(item)
            //tab.innerHTML += `${i} x ${contator} = ${i*contator}<br>`
            contator++
        }
    }
}
