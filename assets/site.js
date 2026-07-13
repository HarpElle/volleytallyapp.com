const button = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
button?.addEventListener('click', () => {
  const open = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  button?.setAttribute('aria-expanded', 'false');
  nav.classList.remove('open');
}));
