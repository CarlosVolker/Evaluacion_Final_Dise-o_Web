function showContent(sectionId, title) {
    const sections = document.querySelectorAll('main > section');
    const mainTitle = document.getElementById('main-title');

    document.addEventListener('DOMContentLoaded', function() {
        var formulario = document.getElementById('formularioContacto');
        formulario.addEventListener('submit', function(event) {
            event.preventDefault();

            var nombre = document.getElementById('nombre').value.trim();
            var correo = document.getElementById('correo').value.trim();
            var mensaje = document.getElementById('mensaje').value.trim();

            if (nombre === "" || correo === "" || mensaje === ""){
                alert('Por favor, complete todos los campos');
            } else {
                alert(`Formulario enviado:
    Nombre  : ${nombre} 
    Correo  : ${correo} 
    Mensaje : ${mensaje}`);
            }  
        });
    });

    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });

    mainTitle.textContent = title;
}

console.log('scripts.js loaded');

showContent('home', 'Te Invito a Explorar Mis Pasatiempos');
