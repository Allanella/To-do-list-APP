
const form = document.getElementById("todo-form");
const put = document.getElementById("todo-input");
const list = document.getElementById("todo-list");


form .addEventListener("submit", ex);


/* function Preventing the default form submission behavior, which refreshes the page!*/
function ex(e){
   e.preventdefault();
    const newTask = put.value;

/* Checking if the input field is empty and alerting the user if it is.*/
   if (newTask === ""){
    alert("Write something");
    return;
}

/*Clearing the input field after adding a task.*/
put.value = "";

addTask(newTask);

}

/*function that will create and display a new task in the list*/
function addTask(task){

  
  /*Creating a span element to hold the task text.*/
  const putText = document.createElement("li");
  const addText = document.createElement("span");
  addText.textContent = task;
  putText.appendChild(putText);


  /* Adding a checkbox input to each task to mark it as complete.*/
  const checkB = document.createElement("input");
  checkB.setAttribute("type", "checkbox");
  putText.appendChild(checkB);

  /*Including a delete button to remove tasks.*/
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "delete";
  putText.appendChild(deleteBtn);


  put.appendChild(putText);






}




