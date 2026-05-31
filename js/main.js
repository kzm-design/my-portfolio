// Drawer
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navDrawer = document.getElementById('navDrawer');
const drawerClose = document.getElementById('drawerClose');
const drawerOverlay = document.getElementById('drawerOverlay');

function openDrawer() {
  navDrawer.classList.add('is-open');
  drawerOverlay.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  navDrawer.classList.remove('is-open');
  drawerOverlay.classList.remove('is-open');
  document.body.style.overflow = '';
}

hamburgerBtn.addEventListener('click', openDrawer);
drawerClose.addEventListener('click', closeDrawer);
drawerOverlay.addEventListener('click', closeDrawer);
document.querySelectorAll('.drawer-link, .drawer-contact-btn').forEach(el => {
  el.addEventListener('click', closeDrawer);
});

// Header dark/light on scroll (only on pages with a hero section)
const hero = document.querySelector('.sec-hero');
if (hero) {
  const header = document.getElementById('header');

  function updateHeader() {
    if (window.scrollY > hero.offsetHeight - 80) {
      header.classList.add('is-light');
    } else {
      header.classList.remove('is-light');
    }
  }

  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();
}
