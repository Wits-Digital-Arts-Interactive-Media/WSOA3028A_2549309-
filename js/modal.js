document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('contactModal');
    const openModalBtn = document.getElementById('openModal');
    const closeModalBtn = document.getElementById('closeModal');
    
    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });
    
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});
