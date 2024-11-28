// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to top button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scroll-to-top").style.display = "block";
    } else {
        document.getElementById("scroll-to-top").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}





/// Sélectionner les éléments nécessaires
const prevButton = document.getElementById('prev-project');
const nextButton = document.getElementById('next-project');
const projectsContainer = document.querySelector('.projects-horizontal');

// Suivi de la position du projet visible
let currentIndex = 0;
const projects = document.querySelectorAll('.project-details');
const totalProjects = projects.length;


