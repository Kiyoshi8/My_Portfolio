/*====================toggle 8icon navbark ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*====================scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetheight('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };        
    });
    /*===sticky navbar ====*/
    let header = document.querySelector('header');

    header.classLis5t.toggle('sticky',window.scrollY > 100);

    /*===remove toggle icon and navbar when click nsvbsr link (scroll)===*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*===sticky navbar ====*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h2, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'left' });


/*=============== typed js ===============*/
const typed = new Typed ('.multiple-text', {
    strings: ['Data Scientist', 'Data Analyst', 'Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

/*=========== contact js ===============*/
function sendMail(){
    var params = {
        FullName: document.getElementById("Full Name").value,
        MobileNumber: document.getElementById("Mobile Number").value,
        EmailAddress: document.getElementById("Email Address").value,
        EmailSubject: document.getElementById("Email Subject").value,
        YourMessage: document.getElementById("Your Message").value,
    };
    const serviceID = "service_ud0whzj";
    const templateID = "template_cewewmj"

    emailjs
     .send(serviceID,templateID,params)
     .then((res) =>{
        document.getElementById("Full Name").value = "";
        document.getElementById("Mobile Number").value = "";
        document.getElementById("Email Address").value = "";
        document.getElementById("Email Subject").value = "";
        document.getElementById("Your Message").value = "";
        console.log(res);
        alert("your message sent successfully");
    })
    .catch((err) => console.log(err));
}
