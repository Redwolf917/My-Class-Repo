const listEl = document.querySelector("#grocery-list");
const shoppingCartEl = document.querySelector("#shopping-cart");
const groceries = ["Bananas", "Apples", "Oranges", "Grapes", "Blueberries"];

listEl.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("I was clicked")
  if(event.target.matches("button")) {
    const item = document.createElement("div");
    item.textContent = groceries[event.target.parentElement.id];
    shoppingCartEl.append(item);
  }
});