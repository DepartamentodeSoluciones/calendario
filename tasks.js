let tasks = []; // Lista de tareas activas

// Función para agregar una tarea
document.getElementById('add-task-btn').addEventListener('click', () => {
    document.getElementById('task-modal').style.display = 'flex';
});

// Función para cerrar el modal
document.getElementById('add-task-btn').addEventListener('click', () => 
{
    const taskName = document.getElementById('task-name').value;
    const taskDate = document.getElementById('task-date').value;

    if (taskName && taskDate) 
    {
        tasks.push(
        {
            name: taskName,
            date: taskDate,
            completed: false
        });
        displayTasks();
    }

    // Limpiar campos del modal
    document.getElementById('task-name').value = '';
    document.getElementById('task-date').value = '';
    document.getElementById('task-modal').style.display = 'none';
});

// Elementos del DOM
const addTaskBtn = document.getElementById('add-task-btn');
const modal = document.getElementById('task-modal');
const closeModal = document.getElementById('close-modal');

// Abrir el modal al hacer clic en el botón "Añadir Tarea"
addTaskBtn.addEventListener('click', () => {
    modal.style.display = 'flex'; // Mostrar el modal
});

// Cerrar el modal al hacer clic en la "X"
closeModal.addEventListener('click', () => {
    modal.style.display = 'none'; // Ocultar el modal
});

// Cerrar el modal si el usuario hace clic fuera de la ventana modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none'; // Ocultar el modal
    }
});

const taskForm = document.getElementById('task-form');

// Procesar el formulario de nueva tarea
taskForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar que la página se recargue

    // Capturar los datos de la nueva tarea
    const taskName = document.getElementById('task-name').value;
    const taskDescription = document.getElementById('task-description').value;
    const taskDate = document.getElementById('task-date').value;

    // Crear el objeto de la nueva tarea
    const newTask = {
        name: taskName,
        description: taskDescription,
        date: taskDate,
        completed: false,
    };

    // Agregar la tarea a la lista
    tasks.push(newTask);

    // Actualizar la visualización de las tareas
    displayTasks();

    // Limpiar el formulario y cerrar el modal
    taskForm.reset();
    modal.style.display = 'none';
});

// Función para mostrar las tareas
function displayTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
    
    tasks.forEach((task, index) => {
        if (!task.completed) {
            const li = document.createElement('li');
            li.textContent = `${task.name} - ${task.date}`;
            
            const completeBtn = document.createElement('button');
            completeBtn.textContent = 'Marcar como Completada';
            completeBtn.addEventListener('click', () => {
                tasks[index].completed = true;
                displayTasks();
                expiredTasksList(); // Actualizar la lista de tareas expiradas
            });
            
            li.appendChild(completeBtn);
            taskList.appendChild(li);
        }
    });
}

function expiredTasksList() {
    const expiredTaskList = document.getElementById('expired-task-list');
    expiredTaskList.innerHTML = '';
    
    tasks.forEach(task => {
        if (task.completed) {
            const li = document.createElement('li');
            li.textContent = `${task.name} - ${task.date}`;
            expiredTaskList.appendChild(li);
        }
    });
}

displayTasks();
expiredTasksList();
