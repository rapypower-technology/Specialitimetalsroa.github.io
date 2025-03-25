(function(){
    const destacados = window.products.filter(p => p.type === 'destacado');
    renderCards(destacados);
})();
