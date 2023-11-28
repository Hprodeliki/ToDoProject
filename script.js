
function addTask(){
  const taskTitle = document.querySelector("#task-title1").value;
  if(taskTitle){
    const template = document.querySelector(".template")
    const newTask = template.cloneNode(true);

    newTask.querySelector(".task-title").textContent = taskTitle;
    newTask.classList.remove("template")
    newTask.classList.remove("hide")

    const list = document.querySelector("#task-list")

    list.appendChild(newTask)

    const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click",function(){

      removeTask(this);
      
    })

    const doneBtn = newTask.querySelector(".done-btn").addEventListener("click",function(){
      completeTask(this);

    })


    document.querySelector("#task-title1").value = ""
  }
}

const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click",function(e){
  e.preventDefault();
  addTask();
})

//remover tarefa

function removeTask(task){
  task.parentNode.remove(true);

}

//completar
function completeTask(task){

  const taskComplete = task.parentNode;

  taskComplete.classList.toggle("done")
  doneBtn.classList.toggle("com")
  removeBtn.classList.toggle("com")
}
