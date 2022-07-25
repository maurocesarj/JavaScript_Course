function exibir() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > anoAtual) {
        window.alert(' [ERROR] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radiosex')
        var idade = anoAtual - Number(fAno.value)
        var genero = ''
        var img = document.getElementById('foto')
        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade <= 12) {
                // criança
                img.src = "img/homembebe.png"
            } else if (idade >= 13 && idade <=18){
                //Jovem   
                img.src = "img/homemjovem.png"         
            } else if (idade >= 19 && idade <= 60) {
                //Adulto
                img.src = "img/homemadulto.png"
            } else {
                //Idoso
                img.src = "img/homemidoso.png"
            }
        } else {
            genero = 'Feminino'
            if (idade >= 0 && idade <= 12) {
                // criança
                img.src = "img/mulherbebe.png"
            } else if (idade >= 13 && idade <=18){
                //Jovem   
                img.src = "img/mulherjovem.png"         
            } else if (idade >= 19 && idade <= 60) {
                //Adulto
                img.src = "img/mulheradulta.png"
            } else {
                //Idoso
                img.src = "img/mulheridosa.png"
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Sexo ${genero} com ${idade} anos de idade`
        res.appendChild(img)
    }

}   