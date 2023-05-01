const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

function addTask(e) {
   const taskValue = taskInput.value.trim();
   if (taskValue === '') {
      alert('please enter the task');
      return;
   }
   const listItem = document.createElement('li');
   listItem.classList.add('task');
   const taskText = document.createElement('span');
   taskText.textContent = taskValue;

   taskText.addEventListener('click', () => {
      taskText.classList.toggle('completed');
   });

   const deleteButton = document.createElement('button');
   deleteButton.textContent = 'Delete';
   deleteButton.addEventListener('click', () => {
      taskList.removeChild(listItem);
   });
   listItem.appendChild(taskText);
   listItem.appendChild(deleteButton);
   taskList.appendChild(listItem);
   taskInput.value = '';

}

addTaskButton.addEventListener('click', addTask);

