// JavaScript code for the to-do list project page
// tests for the code are in todo.test.js

// variable declarations
// button- only add button as the others will be created and added through the add function
const addButton = document.getElementById("todoAdder");
addButton.addEventListener("click", addToDo);

// the two lists used, ul already sketched out in the html
const todos = document.getElementById("todoList");
const dones = document.getElementById("doneList");

// functions
function addToDo() {
  // create the todo list item
  let listItem = document.createElement("li");
  // create the parts that will make up the list item
  let newToDo = document.getElementById("todoInput").value + " ";
  let doneButton = document.createElement("button");
  doneButton.innerText = "Done";
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  // attach the parts to the list item
  listItem.appendChild(document.createTextNode(newToDo));
  listItem.appendChild(doneButton);
  listItem.appendChild(deleteButton);
  // add the list item to the todo ul
  todos.appendChild(listItem);
  // what happens if the buttons for each item are clicked
  doneButton.addEventListener("click", doneToDo);
  deleteButton.addEventListener("click", deleteToDo);
}

function doneToDo(e) {
  e.preventDefault();
  // want to find out which done button was clicked
  const doneItemButton = e.target;
  // what is the closest list item to the done button clicked
  const doneItem = doneItemButton.closest("li");
  // add the item to the done list
  dones.appendChild(doneItem);
  // remove it from this list
  doneItemButton.remove();
}

function deleteToDo(e) {
  e.preventDefault();
  const deleteItemButton = e.target;
  const deleteItem = deleteItemButton.closest("li");
  deleteItem.remove();
}
