const todoList = document.getElementById("todo-list");
const newItemInput = document.getElementById("new-item");
const addItemButton = document.getElementById("add-item");
const filters = document.querySelectorAll('.filters input[type="radio"]');

let todos = []; // Array to store todo items

// Load existing todos from localStorage
const storedTodos = JSON.parse(localStorage.getItem("todos"));
if (storedTodos) {
  todos = storedTodos;
  renderTodos();
}

// Add new item
addItemButton.addEventListener("click", () => {
  const newItemText = newItemInput.value.trim();
  if (newItemText) {
    const newTodo = {
      id: Date.now(),
      text: newItemText,
      completed: false,
    };
    todos.push(newTodo);
    renderTodos();
    saveTodos();
    newItemInput.value = "";
  }
});

// Mark item as completed
todoList.addEventListener("change", (event) => {
  if (event.target.type === "checkbox") {
    const todoId = parseInt(event.target.parentElement.dataset.id);
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);
    todos[todoIndex].completed = event.target.checked;
    renderTodos();
    saveTodos();
  }
});

// Delete item
todoList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-button")) {
    const todoId = parseInt(event.target.parentElement.dataset.id);
    const todoIndex = todos.findIndex((todo) => todo.id === todoId);
    todos.splice(todoIndex, 1);
    renderTodos();
    saveTodos();
  }
});

// Filter items
filters.forEach((filter) => {
  filter.addEventListener("change", () => {
    renderTodos();
  });
});

// Render todos to the list
function renderTodos() {
  todoList.innerHTML = "";

  const filteredTodos = getFilteredTodos();

  filteredTodos.forEach((todo) => {
    const todoItem = document.createElement("li");
    todoItem.classList.add("todo-item");
    todoItem.dataset.id = todo.id;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    todoItem.appendChild(checkbox);

    const label = document.createElement("label");
    label.textContent = todo.text;
    label.classList.toggle("completed", todo.completed);
    todoItem.appendChild(label);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";
    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);
  });
}

// Get filtered todos based on selected filter
function getFilteredTodos() {
  const selectedFilter = document.querySelector(
    '.filters input[type="radio"]:checked'
  ).id;

  switch (selectedFilter) {
    case "show-all":
      return todos;
    case "show-active":
      return todos.filter((todo) => !todo.completed);
    case "show-completed":
      return todos.filter((todo) => todo.completed);
    default:
      return [];
  }
}

// Save todos to localStorage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}
