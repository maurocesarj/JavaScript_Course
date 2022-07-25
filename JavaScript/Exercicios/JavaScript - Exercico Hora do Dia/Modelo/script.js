function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var horaAtual = data.getHours()
    msg.innerHTML = `Agora são ${horaAtual} horas.`
    if (horaAtual >= 0 && horaAtual < 12) {
        img.src = "img/fotomanha.png"
        document.body.style.background = "#7D6037"
    } else if ( horaAtual <= 18) {
        img.src = "img/fototarde.png"
        document.body.style.background = "#FFCB73"
    } else {
        img.src = "img/fotonoite.png"
        document.body.style.background = "#16161A"
    }
}
