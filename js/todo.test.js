// Tests for the to-do list functions in todo.js

// What I think I need to test
// Add tasks
// (once the add button is clicked on)
// check the todo input
// checkeach part of the listitem is there
// li, textNode, done button, delete button

// Complete tasks
// (once the done button is clicked on)
// check the item is added to second list
// check item is removed from the first list

// Delete tasks
// (once the delete button is checked)
// check the item is removed from either list

// Add tasks to a list to keep track of them
// test("Submitting a new task adds it to the list", () => {
//   newTODO = "Know what I am doing,";
// });

// starting from the top with the DOM that initiates the
test("Testing the add button function.", () => {
  document.body.innerHTML = `
  <input type="text" id="todoInput" placeholder="Add your task"></input>
  <button type="button" id="todoAdder">Add</button>
  <h3>To do list</h3>
  <ul id="todoList">
  </ul>
  `;
  const testToDoInput = document.getElementById("todoInput");
  testToDoInput.value = "Testing todo.";
  const testAddBtn = document.getElementById("todoAdder");
  testAddBtn.addEventListener("click", addToDo);
  const testToDoList = document.getElementById("todoList");
  equal(testToDoList.innerHTML, `<li>Testing todo.</li>`);
});

// Check things off the list so completed tasks can be seen
test("Checking an entry marks it as complete", () => {
  // test goes here
});

// Delete things from the list if I don’t need to do them anymor
test("Toggling the filter hides completed tasks from the list", () => {
  // test goes here
});
