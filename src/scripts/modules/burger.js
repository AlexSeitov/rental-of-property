export default function burger(btn, nav, navLink, body) {
  const mobileBtn = document.querySelector(btn);
  const navMenu = document.querySelector(nav);
  const bodyPage = document.querySelector(body);
  const navLinks = document.querySelectorAll(navLink);

  function toggleMenu() {
    mobileBtn.classList.toggle('burger_active');
    navMenu.classList.toggle('nav_active');
    bodyPage.classList.toggle('disable-scroll');
  }

  function closeMenu() {
    mobileBtn.classList.remove('burger_active');
    bodyPage.classList.remove('disable-scroll');
    navMenu.classList.remove('nav_active');
  }

  function closeMenuOnOverlay(e) {
    if (e.target == bodyPage) {
      closeMenu();
    }
  }

  if (mobileBtn) {
    mobileBtn.addEventListener('click', toggleMenu);
  }

  if (navLinks) {
    navLinks.forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  }

  document.addEventListener('click', (e) => closeMenuOnOverlay(e));
  document.addEventListener('touchend', (e) => closeMenuOnOverlay(e));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMenu();
    }
  });
}
