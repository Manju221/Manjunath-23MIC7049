// ================= MOBILE MENU =================

const menuIcon = document.querySelector(".menu-icon");

const navLinks = document.querySelector(".nav-links");


menuIcon.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});



// ================= CLOSE MOBILE MENU =================

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});



// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name = document.getElementById("name").value;


    alert(
        "Thank you, " +
        name +
        "! Your message has been submitted."
    );


    contactForm.reset();

});



// ================= SCROLL ANIMATION =================

const sections = document.querySelectorAll(".section");


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    {
        threshold: 0.1
    }

);


sections.forEach(function (section) {

    section.style.opacity = "0";

    section.style.transform =
        "translateY(30px)";

    section.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(section);

});