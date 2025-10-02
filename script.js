// Sample Tile Products
const products = [
  {
    name: "Marble White Tile",
    price: "INR 45 / sq.ft",
    size: "2x2 ft",
    image: "images/marble-white.jpg"
  },
  {
    name: "Granite Black Tile",
    price: "INR 55 / sq.ft",
    size: "2x4 ft",
    image: "images/granite.jpg"
  },
  {
    name: "Ceramic Beige Tile",
    price: "INR 45 / sq.ft",
    size: "2x2 ft",
    image: "images/ceramic.jpg"
  },
  {
    name: "Wood Finish Tile",
    price: "INR 75 / sq.ft",
    size: "1x8 ft",
    image: "images/wood.jpg"
  },
  {
    name: "Plain Tile",
    price: "INR 40 / sq.ft",
    size: "2x2 ft",
    image: "images/plain-tile.jpg"
  },
  {
    name: "Aqua Tile",
    price: "INR 45 / sq.ft",
    size: "2x2 ft",
    image: "images/Aqua-tile.jpg"
  }
];

// Render products dynamically
const productGrid = document.getElementById("productGrid");

products.forEach(tile => {
  const card = document.createElement("div");
  card.classList.add("product-card");

  card.innerHTML = `
    <img src="${tile.image}" alt="${tile.name}">
    <div class="product-info">
      <h3>${tile.name}</h3>
      <p class="price">${tile.price}</p>
      <p><small>${tile.size}</small></p>
      <button>Size</button>
    </div>
  `;

  productGrid.appendChild(card);
});
