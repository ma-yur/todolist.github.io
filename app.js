// selectors
const toDoInput = document.querySelector(".toDoInput");
const toDoButton = document.querySelector(".toDoButton");
const listItems = document.querySelector(".toDoItems");
const filterOptions=document.querySelector("filter-todo");


// EventListeners
toDoButton.addEventListener("click", addItem);
listItems.addEventListener("click", deletecheck);





// funtions
function addItem(event) {
    event.preventDefault()

    // tododiv
    const toDoDiv = document.createElement("Div");
    toDoDiv.classList.add("toDo");
    // todolist li
    const newToDo = document.createElement("li");
    newToDo.classList.add("newToDo");
    newToDo.innerText = toDoInput.value;

    // append newtodo li to the tododiv
    toDoDiv.appendChild(newToDo);

    // create a checkmark
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<li class="fa fa-check-square"></li>';
    completedButton.classList.add("completebtn");
    toDoDiv.appendChild(completedButton);

    // trashButtonconst 
    trashButton = document.createElement("button");
    trashButton.innerHTML = '<li class="fa fa-trash"></li>';
    toDoDiv.appendChild(trashButton);
    trashButton.classList.add("trashbtn");

    // appendthediv
    listItems.appendChild(toDoDiv);
    toDoInput.value = "";

}

function deletecheck(e) {
    const item = e.target;
    console.log(item);

    if (item.classList[0] === "trashbtn") {
        const todo = item.parentElement;
        todo.remove();
    }
    else if (item.classList[0] === "completebtn") {
        const todo = item.parentElement
        todo.classList.toggle("completed");
    }

}

function filterTodo(){


}