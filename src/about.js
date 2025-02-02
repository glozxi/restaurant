import food from "./food.jpg"

export function about() {
  const about = document.createElement("div");
  about.id = "about";
  document.getElementById("content").appendChild(about);
  const imgDiv = about.appendChild(document.createElement("div"));
  const img = document.createElement("img");
  img.src = food;
  img.alt = "food"
  imgDiv.appendChild(img);
  const heading = document.createElement("h1");
  heading.appendChild(document.createTextNode("About Us"));
  about.appendChild(heading);

  const div = document.createElement("div");
  div.classList.add("card");
  const para1 = document.createElement("p");
  para1.textContent = `We are a group of master chefs, seeking to find the perfect
    blend between cost and taste. We know you like money and you like food, so we are making food
    that costs very little. How can we afford to do it? We are rich, being master chefs for decades.
    Now it is time for us to cook delicious food for you. Food is good isn't it.`
  about.appendChild(div);
  div.appendChild(para1);
}