let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let Tasks = document.querySelector(".Tasks");
let listOfTasks = [];
let deletBtn = document.querySelector(".btns")
// localStorage.clear()

// creating localStorage to keep tasks inside it
if (localStorage.getItem("todoList") === null) {
  localStorage.setItem("todoList", JSON.stringify(listOfTasks));
} else if (localStorage.getItem("todoList")) {
  listOfTasks = JSON.parse(localStorage.getItem("todoList"));
  displayTodos();
}

// creating add Task btn and keep it inside the localStorage ..
function addTodo() {
    if(input.value === ""){
        window.alert("Please Enter a Task")
    }
  if (input.value.trim() === "") return;
  listOfTasks.push(input.value.trim());
  DisplayTodos(input.value.trim());
  // keeping the  value when we press the btn
  localStorage.setItem("todoList", JSON.stringify(listOfTasks));
  input.value = "";
}

// this function for loop inside the listOfTasks
function displayTodos() {
  for (let i = 0; i < listOfTasks.length; i++) {
    DisplayTodos(listOfTasks[i]);
  }
}
// creating list item inner html 
function DisplayTodos(taskVlaue) {
  let newLi = document.createElement("li");
  const NewRandomColor = random_bg_color()
  newLi.className = "single-todo";
  newLi.innerHTML = `
    <p>${taskVlaue}</p>
    <div class="btns">
        <span class="material-icons">
            check_circle
        </span>


        <span class="material-icons">
            delete
        </span>
    
       
    </div>
    `;
    Tasks.appendChild(newLi)
}

// creatting random colors
function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  }