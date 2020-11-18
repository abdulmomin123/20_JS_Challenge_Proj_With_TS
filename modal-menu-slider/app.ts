const toggle = document.getElementById('toggle')!;
const closeBtn = document.getElementById('close')!;
const openBtn = document.getElementById('open')!;
const modal = document.getElementById('modal')!;
const navbar = document.getElementById('navbar')!;

// This function closes navbar if user clicks anywhere outside of navbar once it's opened
// Does not leave unused event listeners on
// It's messy, but it works
function closeNavbar(e: Event) {
  if (
    document.body.classList.contains('show-nav') &&
    e.target !== toggle &&
    !toggle.contains(e.target as any) &&
    e.target !== navbar &&
    !navbar.contains(e.target as any)
  ) {
    document.body.classList.toggle('show-nav');
    document.body.removeEventListener('click', closeNavbar);
  } else if (!document.body.classList.contains('show-nav')) {
    document.body.removeEventListener('click', closeNavbar);
  }
}

// Toggle nav
toggle.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
  document.body.addEventListener('click', closeNavbar);
});

// Show modal
openBtn.addEventListener('click', () => modal.classList.add('show-modal'));

// Hide modal
closeBtn.addEventListener('click', () => modal.classList.remove('show-modal'));

// Hide modal on outside click
window.addEventListener('click', e =>
  e.target == modal ? modal.classList.remove('show-modal') : false
);
