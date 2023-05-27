let menuIcon = document.querySelector('#menu-Icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/*Education button*/
let educationBtn = document.querySelector('#education-btn');
let aboutContent = document.querySelector('.about-content');
let educationContent = document.querySelector('.education-container')
educationBtn.onclick = () => {
    aboutContent.style.display = 'none';
    educationContent.style.display = 'block';
}

/*Go to About */
let goBackBtn = document.querySelector('#go-about');
goBackBtn.onclick = () => {
    aboutContent.style.display = 'block';
    educationContent.style.display = 'none';
}

/*scroll active links*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
        
    });

    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};