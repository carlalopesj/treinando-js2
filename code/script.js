
function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var nasc = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (nasc.value.length == 0 || nasc.value > ano) {
        alert('[ERROR] Verifique os dados e tente novamente!');
    } else {
        var idade = ano - Number(nasc.value);
        res.innerHTML =`Você tem ${idade} anos!`;
    }
}