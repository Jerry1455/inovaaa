*// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Toggle favorite status
  document.querySelectorAll(".favorite").forEach(button => {
    button.addEventListener("click", () => {
      button.classList.toggle("active");
      button.textContent = button.classList.contains("active") ? "💖" : "❤️";
    });
  });

  // Share button
  document.querySelectorAll(".share").forEach(button => {
    button.addEventListener("click", () => {
      alert("Link copiado para compartilhar!");
    });
  });

  // Menu toggle (mobile)
  const menuBtn = document.querySelector(".menu-btn");
  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      alert("Menu aberto!");
    });
  }

  // Carrinho de compras
  let cart = [];

  document.querySelectorAll(".product-card").forEach(card => {
    const addToCartBtn = document.createElement("button");
    addToCartBtn.textContent = "🛒 Comprar";
    addToCartBtn.classList.add("add-to-cart");

    addToCartBtn.addEventListener("click", () => {
      const name = card.querySelector("h3").textContent;
      const price = card.querySelector("p").textContent;
      cart.push({ name, price });
      alert(Produto \"${name}\" adicionado ao carrinho!);
      console.log(cart);
    });

    card.appendChild(addToCartBtn);
  });

  // Filtro por categoria
  document.querySelectorAll(".filters button").forEach(button => {
    button.addEventListener("click", () => {
      const categoria = button.textContent.toLowerCase();
      alert(Filtro ativado: ${categoria});
      // Aqui você pode implementar filtragem real com classes e estilos
    });
  });
});
*