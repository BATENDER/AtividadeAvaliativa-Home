// BOTÃO DE REMOVER PRODUTO
var produto11 = $('#produto11');
var produto21 = $('#produto21');
var produto31 = $('#produto31');
var produto12 = $('#produto12');
var produto22 = $('#produto22');
var produto32 = $('#produto32');

$('#cancelar11').on('click', function() {
    produto11.fadeOut(500);

    setTimeout(function() {
        produto11.removeClass('d-flex');
        produto11.addClass('d-none')
    }, 501);
});

$('#cancelar21').on('click', function() {
    produto21.fadeOut(500);

    setTimeout(function() {
        produto21.removeClass('d-flex');
        produto21.addClass('d-none')
    }, 501);
});

$('#cancelar31').on('click', function() {
    produto31.fadeOut(500);

    setTimeout(function() {
        produto31.removeClass('d-flex');
        produto31.addClass('d-none')
    }, 501);
});

$('#cancelar12').on('click', function() {
    produto12.slideUp(500);

    setTimeout(function() {
        produto12.removeClass('d-flex');
        produto12.addClass('d-none')
    }, 501);
});

$('#cancelar22').on('click', function() {
    produto22.slideUp(500);


    setTimeout(function() {
        produto22.removeClass('d-flex');
        produto22.addClass('d-none')
    }, 501);
});

$('#cancelar32').on('click', function() {
    produto32.slideUp(500);


    setTimeout(function() {
        produto32.removeClass('d-flex');
        produto32.addClass('d-none')
    }, 501);
});


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

$('#adicionar11').on('click', function() {
    numero11 = ++numero11;
    valorProduto1 = 115.9 * numero11;
    valorProduto1 = valorProduto1.toFixed(2);

    subtotalProduto11.text(valorProduto1.toString().replace('.', ','));
    numeroProduto11.text(numero11);
});

$('#remover11').on('click', function() {
    numero11 = --numero11;
    valorProduto1 = 115.9 * numero11;
    valorProduto1 = valorProduto1.toFixed(2);

    subtotalProduto11.text(valorProduto1.toString().replace('.', ','));
    numeroProduto11.text(numero11);

    if (numero11 <= 0) {
        numero11 = ++numero11;
    }
});

$('#adicionar21').on('click', function() {
    numero21 = ++numero21;
    valorProduto2 = 50.49 * numero21;
    valorProduto2 = valorProduto2.toFixed(2);

    subtotalProduto21.text(valorProduto2.toString().replace('.', ','));
    numeroProduto21.text(numero21);
});

$('#remover21').on('click', function() {
    numero21 = --numero21;
    valorProduto2 = 50.49 * numero21;
    valorProduto2 = valorProduto2.toFixed(2);

    subtotalProduto21.text(valorProduto2.toString().replace('.', ','));
    numeroProduto21.text(numero21);

    if (numero21 <= 0) {
        numero21 = ++numero21;
    }
});

$('#adicionar31').on('click', function() {
    numero31 = ++numero31;
    valorProduto3 = 80 * numero31;
    valorProduto3 = valorProduto3.toFixed(2);

    subtotalProduto31.text(valorProduto3.toString().replace('.', ','));
    numeroProduto31.text(numero31);
});

$('#remover31').on('click', function() {
    numero31 = --numero31;
    valorProduto3 = 80 * numero31;
    valorProduto3 = valorProduto3.toFixed(2);

    subtotalProduto31.text(valorProduto3.toString().replace('.', ','));
    numeroProduto31.text(numero31);

    if (numero31 <= 0) {
        numero31 = ++numero31;
    }
});

$('#adicionar12').on('click', function() {
    numero12 = ++numero12;
    valorProduto1 = 115.9 * numero12;
    valorProduto1 = valorProduto1.toFixed(2);

    subtotalProduto12.text(valorProduto1.toString().replace('.', ','));
    numeroProduto12.text(numero12);
});

$('#remover12').on('click', function() {
    numero12 = --numero12;
    valorProduto1 = 115.9 * numero12;
    valorProduto1 = valorProduto1.toFixed(2);

    subtotalProduto12.text(valorProduto1.toString().replace('.', ','));
    numeroProduto12.text(numero12);

    if (numero12 <= 0) {
        numero12 = ++numero12;
    }
});

$('#adicionar22').on('click', function() {
    numero22 = ++numero22;
    valorProduto2 = 50.49 * numero22;
    valorProduto2 = valorProduto2.toFixed(2);

    subtotalProduto22.text(valorProduto2.toString().replace('.', ','));
    numeroProduto22.text(numero22);
});

$('#remover22').on('click', function() {
    numero22 = --numero22;
    valorProduto2 = 50.49 * numero22;
    valorProduto2 = valorProduto2.toFixed(2);

    subtotalProduto22.text(valorProduto2.toString().replace('.', ','));
    numeroProduto22.text(numero22);

    if (numero22 <= 0) {
        numero22 = ++numero22;
    }
});

$('#adicionar32').on('click', function() {
    numero32 = ++numero32;
    valorProduto3 = 80 * numero32;
    valorProduto3 = valorProduto3.toFixed(2);

    subtotalProduto32.text(valorProduto3.toString().replace('.', ','));
    numeroProduto32.text(numero32);
});

$('#remover32').on('click', function() {
    numero32 = --numero32;
    valorProduto3 = 80 * numero32;
    valorProduto3 = valorProduto3.toFixed(2);

    subtotalProduto32.text(valorProduto3.toString().replace('.', ','));
    numeroProduto32.text(numero32);

    if (numero32 <= 0) {
        numero32 = ++numero32;
    }
});


// CALCULANDO FRETE, SUBTOTAL E TOTAL
var sedex1 = $('#sedex1');
var sedex2 = $('#sedex2');