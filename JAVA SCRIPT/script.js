const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
  navLinks.classList.toggle('open');
  const isExpanded = navLinks.classList.contains('open');
  menuButton.setAttribute('aria-expanded', isExpanded);
  menuButton.innerHTML = isExpanded ? '✕' : '☰';
}

menuButton.addEventListener('click', toggleMenu);

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) {
      toggleMenu();
    }
  });
});

const contactForm = document.getElementById('contact-form-id');
const messageDiv = document.getElementById('form-message');

if (contactForm && messageDiv) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nameInput = document.getElementById('name').value.trim();
        const emailInput = document.getElementById('email').value.trim();
        const messageInput = document.getElementById('message').value.trim();

      if (nameInput === '' || emailInput === '' || messageInput === '') {
    messageDiv.textContent = 'Please fill out all required fields.';
} else {
    messageDiv.textContent = 'Thank you for your message! I will be in touch shortly.';
    contactForm.reset();
}

// Set the color to red for both cases
messageDiv.style.color = '#ff6b6b';


    });
}

