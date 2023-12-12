var btnCancelar = document.querySelectorAll('.btn-cancelar');
var listaProdutos = $('.listaProdutos');
var i = 0

btnCancelar.forEach((btn,i) =>{
    let elementoProduto = Object.entries(listaProdutos)[i][1];
    btn.addEventListener('click', function() {
        elementoProduto.innerHTML = "";
        elementoProduto.classList.remove("border");
    })
})


// AUMENTAR E DECREMENTAR QUANTIDADE DE PRODUTOS
// var numeroProduto11 = $('#numeroProduto11');
// var numeroProduto21 = $('#numeroProduto21');
// var numeroProduto31 = $('#numeroProduto31');
// var numeroProduto12 = $('#numeroProduto12');
// var numeroProduto22 = $('#numeroProduto22');
// var numeroProduto32 = $('#numeroProduto32');
// var subtotalProduto11 = $('#subtotalProduto11');
// var subtotalProduto21 = $('#subtotalProduto21');
// var subtotalProduto31 = $('#subtotalProduto31');
// var subtotalProduto12 = $('#subtotalProduto12');
// var subtotalProduto22 = $('#subtotalProduto22');
// var subtotalProduto32 = $('#subtotalProduto32');
// var valorProduto1 = 0;
// var valorProduto2 = 0;
// var valorProduto3 = 0;
// var numero11 = 0;
// var numero21 = 0;
// var numero31 = 0;
// var numero12 = 0;
// var numero22 = 0;
// var numero32 = 0;
var btnAdicionar1 = document.querySelectorAll('.adicionar1');
var btnRemover1 = $('.remover1');
var btnAdicionar2 = $('.adicionar2');
var btnRemover2 = $('.remover2');
var subtotalProduto1 = $('.subtotalProduto1');
var subtotalProduto2 = $('.subtotalProduto2');
var numeroProduto1 = $('.numeroProduto1');
var numeroProduto2 = $('.numeroProduto2');
var numero = 0;
var precoProduto = [115.9, 50.49, 80];
var valorProduto = [0, 0, 0]
var subtotal = 0;
var i = 0;

btnAdicionar1.forEach((btn, i) => {
    btn.addEventListener('click', function() {
        numero = ++numero;
        valorProduto[i] = precoProduto[i] * numero;
        valorProduto[i] = valorProduto[i].toFixed(2);
        subtotal = Number(valorProduto[0]) + Number(valorProduto[1]) + Number(valorProduto[2]);
    
        $('#subtotalTotal1').text(subtotal);
        subtotalProduto11.text(valorProduto[i]);
        numeroProduto1.text(numero);
        // colocar a resposta para cada elemento no html! Ou seja, um id para cada post
    });
})

// $('#adicionar11').on('click', function() {
//     numero11 = ++numero11;
//     valorProduto1 = 115.9 * numero11;
//     valorProduto1 = valorProduto1.toFixed(2);
//     subtotal = valorProduto1 + valorProduto2 + valorProduto3;
//     subtotal = Number(subtotal).toFixed(2);

//     $('#subtotalTotal1').text(subtotal.replace('.', ','));
//     subtotalProduto11.text(valorProduto1.replace('.', ','));
//     numeroProduto11.text(numero11);
// });

// $('#remover11').on('click', function() {
//     if (numero11 <= 0) {
//         numero11 = 0;
//         numeroProduto11.text(numero11);

//     }else{
//         numero11 = --numero11;
//         valorProduto1 = 115.9 * numero11;
//         valorProduto1 = valorProduto1.toFixed(2);
//         subtotal = valorProduto1 + valorProduto2 + valorProduto3;
//         subtotal = Number(subtotal).toFixed(2);
    
//         $('#subtotalTotal1').text(subtotal.toString().replace('.', ','));
//         subtotalProduto11.text(valorProduto1.toString().replace('.', ','));
//         numeroProduto11.text(numero11);
    
//     }
// });


// CALCULANDO FRETE, SUBTOTAL E TOTAL
var sedex1 = $('#sedex1').val();
var sedex2 = $('#sedex2').val();

