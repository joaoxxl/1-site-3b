
document.addEventListener('DOMContentLoaded', function()  {
const aumenta_fonte_botao = document.getElementById('aumentar-fonte');
const diminui_fonte_botao = document.getElementById('diminuir-fonte');

let tamanho_atual_fonte = 1;
aumenta_fonte_botao.addEventListener('click', function(){   
    tamanho_atual_fonte += 0.1
    document.body.style.fontSize = `${tamanho_atual_fonte}rem`;
    });

diminui_fonte_botao.addEventListener('click', function(){   
    tamanho_atual_fonte -= 0.1
    document.body.style.fontSize = `${tamanho_atual_fonte}rem`;
    });

});