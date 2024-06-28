const addBtn = document.querySelector("#add-btn");
const peopleListEl = document.querySelector("#people-list");
const nameEl = document.querySelector("#name");
const modalEl = document.querySelector("#modal-container");
const modalNameEl = document.querySelector("#modal-name");
const descriptionEl = document.querySelector("#description");
const closeEl = document.querySelector(".close");
const saveBtn = document.querySelector("#save");

let people = [{ name: "Bob" }];
let currentId = 0;

function addPersonToList(event) {
  event.preventDefault();
  let name = nameEl.value;
  let li = document.createElement("li");
  li.id = people.length;
  li.innerHTML = name + " <button>edit</button>";
  people.push({ name: name });
  peopleListEl.append(li);
}

function close() {
  modalEl.style.display = "none";
}

function handleClick() {
  // Use event delegation to handle when the user clicks "edit"
}

closeEl.addEventListener("click", close);
addBtn.addEventListener("click", addPersonToList);
