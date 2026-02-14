export { menuSection };

import "./menu-page.css";
import foodImg from "../images/food.jpg";

const foodItems = [
  {
    name: "Hinava",
    description: "Fresh mackerel cured in lime, ginger, and chili.",
    price: "RM 18.00",
  },
  {
    name: "Tuaran Mee",
    description: "Wok-fried egg noodles with roasted slices.",
    price: "RM 15.00",
  },
  {
    name: "Pinasakan Sada",
    description: "Tangy braised fish with wild fruit and turmeric.",
    price: "RM 22.00",
  },
  {
    name: "Beaufort Mee",
    description: "Savory noodles in thick gravy with choy sum.",
    price: "RM 14.00",
  },
  {
    name: "Latok Salad",
    description: "Fresh sea grapes with lime and spicy dipping sauce.",
    price: "RM 12.00",
  },
  {
    name: "Bambangan Chicken",
    description: "Fragrant chicken simmered in wild mango sauce.",
    price: "RM 26.00",
  },
  {
    name: "Sago Pudding",
    description: "Creamy sago with Gula Melaka and coconut milk.",
    price: "RM 8.00",
  },
  {
    name: "Tenom Coffee",
    description: "Dark-roasted highland coffee (Iced/Hot).",
    price: "RM 5.50",
  },
  {
    name: "Kit Chai Ping",
    description: "Calamansi lime juice with salted dried plum.",
    price: "RM 4.50",
  },
];
// object = {name, description, price}

const menuSection = () => {
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu-section");

  foodItems.forEach((item) => {
    const card = foodCard(item.name, item.description, item.price);
    menuDiv.append(card);
  });
  return menuDiv;
};

// create card
const foodCard = (n, d, p) => {
  const img = document.createElement("img");
  img.src = foodImg;

  const name = document.createElement("h3");
  name.textContent = n;
  const description = document.createElement("p");
  description.textContent = d;
  const price = document.createElement("p");
  price.textContent = p;
  const foodDescription = document.createElement("div");
  foodDescription.append(name, description, price);

  const card = document.createElement("div");
  card.classList.add("food-card");
  card.append(img, foodDescription);

  return card;
};
