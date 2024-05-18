function showContent(sectionId, title) {
    const sections = document.querySelectorAll('main > section');
    const mainTitle = document.getElementById('main-title');

    /*Segmento de código que permite arrojar alerta en el formulario de contactos */
    document.addEventListener('DOMContentLoaded', function() {
        var formulario = document.getElementById('formularioContacto');
        formulario.addEventListener('submit', function(event) {
            event.preventDefault();

            /*Creamos variables con los campos del formulario*/
            var nombre = document.getElementById('nombre').value.trim();
            var correo = document.getElementById('correo').value.trim();
            var mensaje = document.getElementById('mensaje').value.trim();

            /*Creamos If para validar si los campos se encuentran completos o no */
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

    /*Estructura que nos permite mostrar o no las secciones que queramos dentro del index. */
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });

    mainTitle.textContent = title;
}

showContent('home', 'Te Invito a Explorar Mis Pasatiempos');
