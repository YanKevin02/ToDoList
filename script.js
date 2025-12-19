function addTask() {
   const taskInput = document.querySelector('.task-input');
   const label = document.querySelector('.label');
   const taskText = taskInput.value.trim();
   let lista = ["Tarefa1", "Tarefa2", "Tarefa3"];
   
   // Caso o input esteja vazio
   if (taskText === '') {
      alert('Por favor, insira uma tarefa válida.');
      return;
   };

   // Verifica se a tarefa já existe
   if (lista.includes(taskText)) {
      alert('Tarefa já existe!');
      taskInput.value = '';
      return;
   }

   // Apaga o texto do input
   taskInput.value = '';
   }

function delTask() {
   const task = document.querySelector('.task');
   task.remove();
}