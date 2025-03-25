(function(){
    const ofertas = window.products.filter(p => p.type === 'oferta');
    renderCards(ofertas);
})();
