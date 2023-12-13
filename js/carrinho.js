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
var numeroProduto11 = $('#numeroProduto11');
var numeroProduto21 = $('#numeroProduto21');
var numeroProduto31 = $('#numeroProduto31');
var numeroProduto12 = $('#numeroProduto12');
var numeroProduto22 = $('#numeroProduto22');
var numeroProduto32 = $('#numeroProduto32');
var subtotalProduto11 = $('#subtotalProduto11');
var subtotalProduto21 = $('#subtotalProduto21');
var subtotalProduto31 = $('#subtotalProduto31');
var subtotalProduto12 = $('#subtotalProduto12');
var subtotalProduto22 = $('#subtotalProduto22');
var subtotalProduto32 = $('#subtotalProduto32');
var valorProduto1 = 0;
var valorProduto2 = 0;
var valorProduto3 = 0;
var numero11 = 0;
var numero21 = 0;
var numero31 = 0;
var numero12 = 0;
var numero22 = 0;
var numero32 = 0;
var total1 = 0;
var total2 = 0;

// BOTÕES DE ADICIONAR
$('#adicionar11').on('click', function() {
    numero11 = ++numero11;
    valorProduto1 = 115.9 * numero11;
    valorProduto1 = valorProduto1.toFixed(2);
    subtotal = Number(valorProduto1) + Number(valorProduto2) + Number(valorProduto3);
    subtotal = Number(subtotal).toFixed(2);

    $('#subtotalTotal1').text(subtotal);
    subtotalProduto11.text(valorProduto1);
    numeroProduto11.text(numero11);

    if (document.querySelector('#sedex1').checked) {
        total = Number(subtotal) + 15;
        total = total.toFixed(2);
        $('#freteTotal1').text('15,00');
        $('#total1').text(total);
    } else {
        total = Number(subtotal);
        total = total.toFixed(2);
        $('#freteTotal1').text('0,00');
        $('#total1').text(total);
    }
});

$('#adicionar21').on('click', function() {
    numero21 = ++numero21;
    valorProduto2 = 50.49 * numero21;
    valorProduto2 = valorProduto2.toFixed(2);
    subtotal = Number(valorProduto1) + Number(valorProduto2) + Number(valorProduto3);
    subtotal = Number(subtotal).toFixed(2);

    $('#subtotalTotal1').text(subtotal);
    subtotalProduto21.text(valorProduto2);
    numeroProduto21.text(numero21);

    if (document.querySelector('#sedex1').checked) {
        total = Number(subtotal) + 15;
        total = total.toFixed(2);
        $('#freteTotal1').text('15,00');
        $('#total1').text(total);
    } else {
        total = Number(subtotal);
        total = total.toFixed(2);
        $('#freteTotal1').text('0,00');
        $('#total1').text(total);
    }
});

$('#adicionar31').on('click', function() {
    numero31 = ++numero31;
    valorProduto3 = 80 * numero31;
    valorProduto3 = valorProduto3.toFixed(2);
    subtotal = Number(valorProduto1) + Number(valorProduto2) + Number(valorProduto3);
    subtotal = Number(subtotal).toFixed(2);

    $('#subtotalTotal1').text(subtotal);
    subtotalProduto31.text(valorProduto3);
    numeroProduto31.text(numero31);

    if (document.querySelector('#sedex1').checked) {
        total = Number(subtotal) + 15;
        total = total.toFixed(2);
        $('#freteTotal1').text('15,00');
        $('#total1').text(total);
    } else {
        total = Number(subtotal);
        total = total.toFixed(2);
        $('#freteTotal1').text('0,00');
        $('#total1').text(total);
    }
});

$('#adicionar12').on('click', function() {
    numero12 = ++numero12;
    valorProduto1 = 115.9 * numero12;
    valorProduto1 = valorProduto1.toFixed(2);
    subtotal = Number(valorProduto1) + Number(valorProduto2) + Number(valorProduto3);
    subtotal = Number(subtotal).toFixed(2);

    $('#subtotalTotal2').text(subtotal);
    subtotalProduto12.text(valorProduto1);
    numeroProduto12.text(numero12);

    if (document.querySelector('#sedex2').checked) {
        total = Number(subtotal) + 15;
        total = total.toFixed(2);
        $('#freteTotal2').text('15,00');
        $('#total2').text(total);
    } else {
        total = Number(subtotal);
        total = total.toFixed(2);
        $('#freteTotal2').text('0,00');
        $('#total2').text(total);
    }
});

$('#adicionar22').on('click', function() {
    numero22 = ++numero12;
    valorProduto2 = 50.49 * numero22;
    valorProduto2 = valorProduto2.toFixed(2);
    subtotal = Number(valorProduto1) + Number(valorProduto2) + Number(valorProduto3);
    subtotal = Number(subtotal).toFixed(2);

    $('#subtotalTotal2').text(subtotal);
    subtotalProduto22.text(valorProduto2);
    numeroProduto22.text(numero22);

    if (document.querySelector('#sedex2').checked) {
        total = Number(subtotal) + 15;
        total = total.toFixed(2);
        $('#freteTotal2').text('15,00');
        $('#total2').text(total);
    } else {
        total = Number(subtotal);
        total = total.toFixed(2);
        $('#freteTotal2').text('0,00');
        $('#total2').text(total);
    }
});

$('#adicionar32').on('click', function() {
    numero32 = ++numero32;
    valorProduto3 = 80 * numero32;
    valorProduto3 = valorProduto3.toFixed(2);
    subtotal = Number(valorProduto1) + Number(valorProduto2) + Number(valorProduto3);
    subtotal = Number(subtotal).toFixed(2);

    $('#subtotalTotal2').text(subtotal);
    subtotalProduto32.text(valorProduto3);
    numeroProduto32.text(numero32);

    if (document.querySelector('#sedex2').checked) {
        total = Number(subtotal) + 15;
        total = total.toFixed(2);
        $('#freteTotal2').text('15,00');
        $('#total2').text(total);
    } else {
        total = Number(subtotal);
        total = total.toFixed(2);
        $('#freteTotal2').text('0,00');
        $('#total2').text(total);
    }
});


// BOTÕES DE REMOVER
$('#remover11').on('click', function() {
    if (numero11 <= 0) {
        numero11 = 0;
        numeroProduto11.text(numero11);

    }else{
        numero11 = --numero11;
        valorProduto1 = 115.9 * Number(numero11);
        valorProduto1 = valorProduto1.toFixed(2);
        subtotal = Number(valorProduto1) + Number(valorProduto2) + Number(valorProduto3);
        subtotal = Number(subtotal).toFixed(2);
    
        $('#subtotalTotal1').text(subtotal);
        subtotalProduto11.text(valorProduto1);
        numeroProduto11.text(numero11);
        
        if (document.querySelector('#sedex1').checked) {
            total = Number(subtotal) + 15;
            total = total.toFixed(2);
            $('#freteTotal1').text('15,00');
            $('#total1').text(total);
        } else {
            total = Number(subtotal);
            total = total.toFixed(2);
            $('#freteTotal1').text('0,00');
            $('#total1').text(total);
        }
    }
});

$('#remover21').on('click', function() {
    if (numero21 <= 0) {
        numero21 = 0;
        numeroProduto21.text(numero21);

    }else{
        numero21 = --numero21;
        valorProduto2 = 50.49 * Number(numero21);
        valorProduto2 = valorProduto2.toFixed(2);
        subtotal = Number(valorProduto1) + Number(valorProduto2) + Number(valorProduto3);
        subtotal = Number(subtotal).toFixed(2);
    
        $('#subtotalTotal1').text(subtotal);
        subtotalProduto21.text(valorProduto2);
        numeroProduto21.text(numero21);
        
        if (document.querySelector('#sedex1').checked) {
            total = Number(subtotal) + 15;
            total = total.toFixed(2);
            $('#freteTotal1').text('15,00');
            $('#total1').text(total);
        } else {
            total = Number(subtotal);
            total = total.toFixed(2);
            $('#freteTotal1').text('0,00');
            $('#total1').text(total);
        }
    }
});

$('#remover31').on('click', function() {
    if (numero31 <= 0) {
        numero31 = 0;
        numeroProduto31.text(numero31);

    }else{
        numero31 = --numero31;
        valorProduto3 = 80 * Number(numero31);
        valorProduto3 = valorProduto3.toFixed(2);
        subtotal = Number(valorProduto1) + Number(valorProduto2) + Number(valorProduto3);
        subtotal = Number(subtotal).toFixed(2);
    
        $('#subtotalTotal1').text(subtotal);
        subtotalProduto31.text(valorProduto3);
        numeroProduto31.text(numero31);
        
        if (document.querySelector('#sedex1').checked) {
            total = Number(subtotal) + 15;
            total = total.toFixed(2);
            $('#freteTotal1').text('15,00');
            $('#total1').text(total);
        } else {
            total = Number(subtotal);
            total = total.toFixed(2);
            $('#freteTotal1').text('0,00');
            $('#total1').text(total);
        }
    }
});

$('#remover12').on('click', function() {
    if (numero12 <= 0) {
        numero12 = 0;
        numeroProduto12.text(numero12);

    }else{
        numero12 = --numero12;
        valorProduto1 = 115.9 * Number(numero12);
        valorProduto1 = valorProduto1.toFixed(2);
        subtotal = Number(valorProduto1) + Number(valorProduto2) + Number(valorProduto3);
        subtotal = Number(subtotal).toFixed(2);
    
        $('#subtotalTotal2').text(subtotal);
        subtotalProduto12.text(valorProduto1);
        numeroProduto12.text(numero12);
        
        if (document.querySelector('#sedex2').checked) {
            total = Number(subtotal) + 15;
            total = total.toFixed(2);
            $('#freteTotal2').text('15,00');
            $('#total2').text(total);
        } else {
            total = Number(subtotal);
            total = total.toFixed(2);
            $('#freteTotal2').text('0,00');
            $('#total2').text(total);
        }
    }
});

$('#remover22').on('click', function() {
    if (numero22 <= 0) {
        numero22 = 0;
        numeroProduto22.text(numero22);

    }else{
        numero22 = --numero22;
        valorProduto2 = 50.49 * Number(numero22);
        valorProduto2 = valorProduto2.toFixed(2);
        subtotal = Number(valorProduto1) + Number(valorProduto2) + Number(valorProduto3);
        subtotal = Number(subtotal).toFixed(2);
    
        $('#subtotalTotal2').text(subtotal);
        subtotalProduto22.text(valorProduto2);
        numeroProduto22.text(numero22);
        
        if (document.querySelector('#sedex2').checked) {
            total = Number(subtotal) + 15;
            total = total.toFixed(2);
            $('#freteTotal2').text('15,00');
            $('#total2').text(total);
        } else {
            total = Number(subtotal);
            total = total.toFixed(2);
            $('#freteTotal2').text('0,00');
            $('#total2').text(total);
        }
    }
});

$('#remover32').on('click', function() {
    if (numero32 <= 0) {
        numero32 = 0;
        numeroProduto22.text(numero32);

    }else{
        numero32 = --numero32;
        valorProduto3 = 50.49 * Number(numero32);
        valorProduto3 = valorProduto3.toFixed(2);
        subtotal = Number(valorProduto1) + Number(valorProduto2) + Number(valorProduto3);
        subtotal = Number(subtotal).toFixed(2);
    
        $('#subtotalTotal2').text(subtotal);
        subtotalProduto32.text(valorProduto3);
        numeroProduto32.text(numero32);
        
        if (document.querySelector('#sedex2').checked) {
            total = Number(subtotal) + 15;
            total = total.toFixed(2);
            $('#freteTotal2').text('15,00');
            $('#total2').text(total);
        } else {
            total = Number(subtotal);
            total = total.toFixed(2);
            $('#freteTotal2').text('0,00');
            $('#total2').text(total);
        }
    }
});