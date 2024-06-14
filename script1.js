// script.js
document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.nav-item a');

  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
          navbar.style.backgroundColor = '#00264d';
      } else {
          navbar.style.backgroundColor = '#004080';
      }
  });

  navLinks.forEach(link => {
      link.addEventListener('mouseover', function() {
          link.style.backgroundColor = '#00264d';
          link.style.color = '#ffd700';
      });
      link.addEventListener('mouseout', function() {
          link.style.backgroundColor = '';
          link.style.color = '';
      });
  });
});
