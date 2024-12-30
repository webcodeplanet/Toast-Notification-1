const toastContainer = document.getElementById('container');

function showToast(message) {    
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toast.remove();
    }, 3000); 
}

document.getElementById('show-btn').addEventListener('click', () => {
    showToast('This is a message!');
});
