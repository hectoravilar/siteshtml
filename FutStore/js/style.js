document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('secondary-color-picker').addEventListener('input', function() {
    document.documentElement.style.setProperty('--secondary-color', this.value);
});

document.querySelectorAll('.categoria').forEach(button => {
    button.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        const projects = document.querySelectorAll('.projeto');

        projects.forEach(project => {
            if (category === 'all' || project.getAttribute('data-category') === category) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }

            document.querySelectorAll('.projeto').forEach((project, index) => {
                project.style.setProperty('--i', index);
            });
        });
    });
});            