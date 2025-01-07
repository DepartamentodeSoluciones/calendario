let currentMonth = new Date(); // Fecha actual

// Función para renderizar el calendario
function renderCalendar() {
    const calendarContainer = document.getElementById('calendar');
    const currentMonthDisplay = document.getElementById('current-month');
    
    const month = currentMonth.getMonth();
    const year = currentMonth.getFullYear();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    currentMonthDisplay.textContent = `${firstDay.toLocaleString('default', { month: 'long' })} ${year}`;
    
    calendarContainer.innerHTML = ''; // Limpiar calendario
    
    // Generar días vacíos antes del primer día del mes
    for (let i = 0; i < firstDay.getDay(); i++) {
        const emptyDay = document.createElement('div');
        calendarContainer.appendChild(emptyDay);
    }
    
    // Generar los días del mes
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const dayElement = document.createElement('div');
        dayElement.textContent = day;
        calendarContainer.appendChild(dayElement);
    }
}

// Función para navegar entre meses
document.getElementById('prev-month').addEventListener('click', () => {
    currentMonth.setMonth(currentMonth.getMonth() - 1);
    renderCalendar();
});

document.getElementById('next-month').addEventListener('click', () => {
    currentMonth.setMonth(currentMonth.getMonth() + 1);
    renderCalendar();
});

// Renderizar calendario inicial
renderCalendar();
