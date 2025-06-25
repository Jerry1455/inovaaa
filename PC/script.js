function adicionarAoCarrinho(produto) {
  alert(produto + ' foi adicionado ao carrinho!');
}

const openBtn = document.getElementById('menu-open-btn');
const closeBtn = document.getElementById('menu-close-btn');
const sidebar = document.getElementById('cart-sidebar');
const overlay = document.getElementById('overlay');

function openSidebar() {
  sidebar.classList.add('cart-open');
  overlay.classList.add('show');
  sidebar.setAttribute('aria-hidden', 'false');
  openBtn.classList.add('hidden');
}

function closeSidebar() {
  sidebar.classList.remove('cart-open');
  overlay.classList.remove('show');
  sidebar.setAttribute('aria-hidden', 'true');

  if (window.scrollY <= 10) {
    openBtn.classList.remove('hidden');
  }
}

openBtn.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

window.addEventListener('scroll', () => {
  if (window.scrollY > 10 && !sidebar.classList.contains('cart-open')) {
    openBtn.classList.add('hidden');
  } else if (!sidebar.classList.contains('cart-open')) {
    openBtn.classList.remove('hidden');
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
