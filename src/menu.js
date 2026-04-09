export default function loadMenu() {
  const content = document.getElementById("content");

  const section = document.createElement("section");
  section.classList.add("page");

  const title = document.createElement("h1");
  title.textContent = "Menu";

  const items = [
    {
      name: "Grilled Chicken Bowl",
      description: "Grilled chicken, rice, greens, and house sauce.",
      price: "$10",
    },
    {
      name: "Classic Burger",
      description: "Beef patty, cheddar cheese, lettuce, tomato, and fries.",
      price: "$12",
    },
    {
      name: "Pasta Alfredo",
      description: "Creamy pasta with parmesan and herbs.",
      price: "$11",
    },
  ];

  section.appendChild(title);

  items.forEach((itemData) => {
    const card = document.createElement("div");
    card.classList.add("menu-item");

    const name = document.createElement("h2");
    name.textContent = itemData.name;

    const description = document.createElement("p");
    description.textContent = itemData.description;

    const price = document.createElement("span");
    price.classList.add("price");
    price.textContent = itemData.price;

    card.append(name, description, price);
    section.appendChild(card);
  });

  content.appendChild(section);
}