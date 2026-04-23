let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {

            navlinks.forEach(link => {
                link.classList.remove("active");
            });

            let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
};

// --------------scroll reveal---------------------- 
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});ScrollReveal().reveal('.home-content ,.heading', { origin:'top'});
ScrollReveal().reveal('.home-image,.service-container,.portfolio-box,.contact form', { origin:"bottom"});
ScrollReveal().reveal(' .home-content h1,.about-image', { origin:"left"});
ScrollReveal().reveal(' .home-content p,.about-content', { origin:"right"});


const typed=new Typed(".multiple-text",{
    strings:['Frontend Developer',"Web Developer","Python Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})