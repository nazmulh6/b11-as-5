document.addEventListener("DOMContentLoaded", function()  {
    const currentDate = document.getElementById('current-day&date');
    const today = new Date();
    const options = {weekday: 'long', year: 'numeric', month: 'long', day:'numeric'};
    const dateFormat = today.toLocaleDateString(undefined, options);
    
    currentDate.textContent = `${dateFormat}`;
    });