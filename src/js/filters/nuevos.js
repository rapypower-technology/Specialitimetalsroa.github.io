(function(){
    const nuevos = window.products.filter(p => p.type === 'nuevo');
    renderCards(nuevos);
})();
