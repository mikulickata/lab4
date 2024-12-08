document.querySelectorAll('.gallery img').forEach(img => {
    img.addEventListener('click', () => {
        alert(`Kliknuli ste na: ${img.alt}`);
    });
});
