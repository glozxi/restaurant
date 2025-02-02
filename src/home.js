import food from "./food.jpg"

function createCard(cardsDiv, img, name) {
  const div = cardsDiv.appendChild(document.createElement("div"));
  div.appendChild(img);
  const innerDiv =  div.appendChild(document.createElement("div"));
  const heading = innerDiv.appendChild(document.createElement("h2"));
  heading.appendChild(document.createTextNode(name));
}

export function homePage() {
  const content = document.createElement("div");
  content.id = "home";
  document.getElementById("content").appendChild(content);
  const imgDiv = content.appendChild(document.createElement("div"));
  const img = document.createElement("img");
  img.src = food;
  img.alt = "food"
  imgDiv.appendChild(img);
  const heading = document.createElement("h1");
  heading.appendChild(document.createTextNode("Yummy Food House"));
  content.appendChild(heading);

  const cardsDiv = content.appendChild(document.createElement("div"));

  createCard(cardsDiv, img.cloneNode(), "Deliveries");
  createCard(cardsDiv, img.cloneNode(), "Parties");
}

