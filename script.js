
  const toggleBtn = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Icon toggle
    if (navLinks.classList.contains('active')) {
      toggleBtn.innerHTML = '&times;'; // X icon
    } else {
      toggleBtn.innerHTML = '&#9776;'; // Hamburger icon
    }
  });
