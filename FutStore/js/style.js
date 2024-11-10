// Alternar tema claro/escuro
document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        document.documentElement.style.setProperty('--background-color', '#1c1c1c');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
    } else {
        document.documentElement.style.setProperty('--background-color', '#ffffff');
        document.documentElement.style.setProperty('--text-color', '#3d7598');
    }
});

// Alterar cor secundária
document.getElementById('secondary-color-picker').addEventListener('input', function() {
    document.documentElement.style.setProperty('--secondary-color', this.value);
});

// Filtrar produtos por categoria
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

