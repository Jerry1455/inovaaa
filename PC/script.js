function adicionarAoCarrinho(produto) {
  alert(produto + ' foi adicionado ao carrinho!');
}



  function minhaFuncao() {
    alert('Imagem clicada!');
  }

  <script>
  function scrollCarrossel(direcao) {
    const carrossel = document.getElementById("carrossel");
    const larguraItem = 200; // tamanho do item + gap
    carrossel.scrollBy({
      left: direcao * larguraItem,
      behavior: 'smooth'
    });
  }
</script>
