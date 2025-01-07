// Función para actualizar el reloj y el saludo
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    clock.textContent = `${hours}:${minutes}:${seconds}`;
    
    // Saludo dinámico basado en la hora
    const greeting = document.getElementById('greeting');
    if (hours < 12) {
        greeting.textContent = '¡Buenos días!';
    } else if (hours < 18) {
        greeting.textContent = '¡Buenas tardes!';
    } else {
        greeting.textContent = '¡Buenas noches!';
    }
}

// Función para actualizar la fecha actual
function updateDate() {
    const date = document.getElementById('date');
    const today = new Date();
    const dateString = today.toLocaleDateString('es-ES', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    date.textContent = dateString;
}

// Iniciar reloj
setInterval(updateClock, 1000);
updateClock();
updateDate();
