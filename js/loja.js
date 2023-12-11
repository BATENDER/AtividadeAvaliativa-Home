// Código da páina "loja.html", para que quando clicado no botão 'adicionar ao carrinho' (Produtos > ver mais > adicionar ao carrinho), o contador acima do botão da loja incrementará.

var numero = 0;
var adicionarCarrinho = $('#adicionarAoCarrinho').on('click', function() {
    let qtdCarrinho = $('#qtdCarrinho');
    
    numero = ++numero;

    qtdCarrinho.text(numero);
});