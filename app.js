//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
//event liteners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

//Functions
function addTodo(event) {
  //Prevent from form submitting
  event.preventDefault();
  //Todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  //delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "<i class='fas fa-trash-alt'></i>";
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);
  //append to list
  todoList.appendChild(todoDiv);
  //clear todo input value
  todoInput.value = "";
}
function deleteCheck(e) {
  const item = e.target;
  //DELETE
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitioned", function () {
      todo.remove();
    });
  }
}
