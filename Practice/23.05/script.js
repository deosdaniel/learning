const navLinks = document.querySelectorAll('.navActive');
navLinks.forEach(links => {
    links.addEventListener('click', function(e){
        e.preventDefault();
        navLinks.forEach(link => link.classList.remove('active'));
        links.classList.add('active');
    })
})