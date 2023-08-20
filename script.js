document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');
    const ctaButton = document.querySelector('.cta-button');
    
    navbar.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
    

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSectionId = link.getAttribute('href');
        const targetSection = document.querySelector(targetSectionId);
    
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
    
        navLinks.classList.remove('active'); 
      });
    });

    ctaButton.addEventListener('click', function(event) {
      event.preventDefault();
    
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
  
document.querySelectorAll('.service').forEach(service => {
    service.addEventListener('click', function() {
      service.classList.toggle('active');
    });
  });
  

  const contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {

      console.log('Form data sent:', { name, email, message });
  

      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
  
      alert('Message sent successfully!');
    } else {
      alert('Please fill out all fields.');
    }
  });
  

  