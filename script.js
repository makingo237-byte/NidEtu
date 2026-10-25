const year = document.querySelector('#year');
year.textContent = new Date().getFullYear();

document.querySelectorAll('.heart').forEach((button) => {
  button.addEventListener('click', () => {
    const saved = button.classList.toggle('active');
    button.textContent = saved ? '♥' : '♡';
    button.setAttribute('aria-pressed', String(saved));
  });
});

const form = document.querySelector('#contact-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = document.querySelector('#form-message');
  message.textContent = 'Merci ! Ton intérêt est bien noté pour la démonstration du projet.';
  message.classList.add('success');
  form.reset();
});

const menuButton = document.querySelector('.menu-toggle');
menuButton.addEventListener('click', () => {
  const open = document.querySelector('.topbar').classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.topbar nav a').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.topbar').classList.remove('menu-open');
    menuButton.setAttribute('aria-expanded', 'false');
  });
});
