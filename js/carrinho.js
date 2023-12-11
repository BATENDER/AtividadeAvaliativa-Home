var produto11 = $('#produto11');
var produto21 = $('#produto21');
var produto31 = $('#produto31');
var produto12 = $('#produto12');
var produto22 = $('#produto22');
var produto32 = $('#produto32');


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