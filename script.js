// ================================
// Navbar Scroll Effect
// ================================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// ================================
// Dark Mode
// ================================

const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        darkModeToggle.classList.remove("fa-moon");
        darkModeToggle.classList.add("fa-sun");

    }else{

        darkModeToggle.classList.remove("fa-sun");
        darkModeToggle.classList.add("fa-moon");

    }

});


// ================================
// Hamburger Menu
// ================================

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Close menu after clicking

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});


// ================================
// Scroll Reveal Animation
// ================================

function reveal(){

    const reveals=document.querySelectorAll(".reveal");

    reveals.forEach((element)=>{

        const windowHeight=window.innerHeight;

        const revealTop=element.getBoundingClientRect().top;

        const revealPoint=120;

        if(revealTop<windowHeight-revealPoint){

            element.classList.add("active");

        }

    });

}

window.addEventListener("scroll",reveal);
window.addEventListener("load",reveal);


// ================================
// Back To Top Button
// ================================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.style.display="block";

    }

    else{

        topBtn.style.display="none";

    }

});


topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,
        behavior:"smooth"

    });

});


// ================================
// Contact Form
// ================================

const form=document.querySelector(".contact-form");

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("✅ Thank you! Your message has been sent successfully.");

    form.reset();

});


// ================================
// Smooth Scroll
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


// ================================
// Loading Animation
// ================================

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});