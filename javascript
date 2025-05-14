// script.js
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => modal.style.display = 'none');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Close with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});
