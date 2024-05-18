function showContent(sectionId, title) {
    const sections = document.querySelectorAll('main > section');
    const mainTitle = document.getElementById('main-title');

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
