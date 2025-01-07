let tasks = []; // Lista de tareas activas

// Función para agregar una tarea
document.getElementById('add-task-btn').addEventListener('click', () => {
    document.getElementById('task-modal').style.display = 'flex';
});

// Función para cerrar el modal
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('task-modal').style.display = 'none';
});

// Función para manejar el formulario de la tarea
document.getElementById('task-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('task-name').value;
    const description = document.getElementById('task-description').value;
    const date = document.getElementById('task-date').value;
    
    const newTask = {
        id: Date.now(),
        name,
        description,
        date,
        completed: false
    };
    
    tasks.push(newTask);
    displayTasks();
    document.getElementById('task-modal').style.display = 'none';
});

// Función para mostrar las tareas
function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    
    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = `${task.name} - ${task.date}`;
        
        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Marcar como Completada';
        completeBtn.addEventListener('click', () => {
            task.completed = true;
            displayTasks();
        });
        
        li.appendChild(completeBtn);
        taskList.appendChild(li);
    });
}

displayTasks();
