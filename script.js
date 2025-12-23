addEventListener('DOMContentLoaded', () => {
   localStorage.getItem('tasks');
   for (let i = 0; i < localStorage.length; i++) {
      
      if (localStorage.length == 0) {
         break;
      }

      if (localStorage.length != 0) {
      const taskText = localStorage.key(i);
      const capitalizedTaskText = capitalize(taskText);
      const taskLi = document.createElement('li');
      taskLi.classList.add('task');
      const taskLabel = document.createElement('label');
      taskLabel.classList.add('label');
      taskLabel.textContent = capitalizedTaskText;
      
      if (localStorage.getItem(taskText) === 'completed') {
         taskLabel.classList.add('labelchecked');
      }
      taskLabel.onclick = toggleTaskCompletion;
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('x-btn');
      deleteBtn.textContent = 'X';
      deleteBtn.onclick = delTask;
      taskLi.appendChild(taskLabel);
      taskLi.appendChild(deleteBtn);
      document.querySelector('.task-list').appendChild(taskLi);
      
      localStorage.removeItem("Count");
   }
   }
});

function addTask() {
   const taskInput = document.querySelector('.task-input');
   const taskText = taskInput.value.trim();
   const capitalizedTaskText = capitalize(taskText);
   let lista = Array.from(document.querySelectorAll('.label')).map(label => label.textContent);

   // Caso o input esteja vazio
   if (taskText === '') {
      alert('Por favor, insira uma tarefa válida.');
      return;
   };

   // Verifica se a tarefa já existe
   if (lista.includes(capitalizedTaskText)) {
      alert('Essa tarefa já existe!');
      taskInput.value = '';
      return;
   }

   // Cria os elementos da tarefa
   const taskLi = document.createElement('li');
   taskLi.classList.add('task');
   const taskLabel = document.createElement('label');
   taskLabel.classList.add('label');
   taskLabel.textContent = capitalizedTaskText;
   taskLabel.onclick = toggleTaskCompletion;
   const deleteBtn = document.createElement('button');
   deleteBtn.classList.add('x-btn');
   deleteBtn.textContent = 'X';
   deleteBtn.onclick = delTask;
   taskLi.appendChild(taskLabel);
   taskLi.appendChild(deleteBtn);
   document.querySelector('.task-list').appendChild(taskLi);
   lista.push(capitalizedTaskText);

   // Salva a tarefa no localStorage
   localStorage.setItem(capitalizedTaskText, 'incomplete');
   // Apaga o texto do input
   taskInput.value = '';
   }

function delTask() {
   const taskItem = this.parentElement;
   taskItem.remove();

   const taskLabel = taskItem.querySelector('.label').textContent;
   localStorage.removeItem(taskLabel);
}

function toggleTaskCompletion(event) {
   if (event.target.classList.contains('label')) {
      event.target.classList.toggle('labelchecked');
      localStorage.setItem(event.target.textContent, event.target.classList.contains('labelchecked') ? 'completed' : 'incomplete');
   } else {
      event.target.classList.remove('labelchecked');
      localStorage.setItem(event.target.textContent, 'incomplete');
      
   }
}

function capitalize(text) {
  if (typeof text !== 'string' || text.length === 0) return '';
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

const inputField = document.querySelector('.task-input');
inputField.addEventListener('keypress', function(event) {
   if (event.key === 'Enter') {
      addTask();
   }});