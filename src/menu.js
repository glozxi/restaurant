import food from "./food.jpg"

function createMenuItem(food) {
  const container = document.createElement("div");
  container.appendChild(food.img);
  const info = document.createElement("div");
  const nameDiv = info.appendChild(document.createElement("div"));
  nameDiv.appendChild(document.createTextNode(food.name));
  container.appendChild(nameDiv);
  const priceDiv = info.appendChild(document.createElement("div"));
  priceDiv.appendChild(document.createTextNode(food.price));
  container.appendChild(priceDiv);
  return container;
}

class Food {
  constructor(img, name, price) {
    this.img = img;
    this.name = name;
    this.price = price;
  }
}

export function menu() {
  const img = document.createElement("img");
  img.src = food;
  img.alt = "food"
  
  const menuItems = [
    new Food(img.cloneNode(), "Pudding", "$10"),
    new Food(img.cloneNode(), "Chicken Rice", "$5"),
    new Food(img.cloneNode(), "Chocolate Cake", "$19"),
    new Food(img.cloneNode(), "Steak", "$40"),
    new Food(img.cloneNode(), "Fried Chicken", "$3"),
    new Food(img.cloneNode(), "Bulgogi Rice", "$6"),
    new Food(img.cloneNode(), "Fried Rice", "$8"),
    new Food(img.cloneNode(), "Fried Noodles", "$7"),
    new Food(img.cloneNode(), "Spaghetti", "$15"),
    new Food(img.cloneNode(), "Duck Rice", "$5"),
    new Food(img.cloneNode(), "Satay", "$20"),
  ]

  const menu = document.createElement("div");
  menu.id = "menu";
  document.getElementById("content").appendChild(menu);  
  const heading = document.createElement("h1");
  heading.appendChild(document.createTextNode("Menu"));
  menu.appendChild(heading);

  const cardsDiv = menu.appendChild(document.createElement("div"));

  for (const item of menuItems) {
    cardsDiv.appendChild(createMenuItem(item));
  }
}