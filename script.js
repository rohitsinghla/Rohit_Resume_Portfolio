// Navbar
function toggleMenu() {
    const navItems = document.getElementById('nav-items');
    navItems.classList.toggle('active');
}


// document.addEventListener('DOMContentLoaded', () => {
  
// });

// contact form

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('THANK YOU FOR GETTING IN TOUCH.OUR TEAM WILL CONTACT YOU SHORTLY.');
    this.reset();
});



// Back to Top Button

let backToTopBtn = document.getElementById("backToTop");


window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

backToTopBtn.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});