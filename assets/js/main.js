document.addEventListener('DOMContentLoaded', () => {
  // Active Nav Link
  const currentPath = window.location.pathname;
  const navItems = document.querySelectorAll('.nav-links a:not(.btn)');
  navItems.forEach(link => {
    const href = link.getAttribute('href');
    if (href && (currentPath.endsWith(href) || (currentPath.endsWith('/') && href === 'index.html'))) {
      link.classList.add('active');
    }
  });

  // Sticky Navbar
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Dark Mode Toggle
  const themeToggle = document.querySelector('.theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  if (currentTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      let theme = document.documentElement.getAttribute('data-theme');
      if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      }
    });
  }

  // RTL Toggle
  const rtlToggle = document.querySelector('.rtl-toggle');
  const currentDir = localStorage.getItem('dir') || 'ltr';
  
  if (currentDir === 'rtl') {
    document.documentElement.setAttribute('dir', 'rtl');
    if (rtlToggle) rtlToggle.innerHTML = '<i class="fas fa-exchange-alt"></i>';
  } else {
    if (rtlToggle) rtlToggle.innerHTML = '<i class="fas fa-exchange-alt"></i>';
  }

  if (rtlToggle) {
    rtlToggle.addEventListener('click', () => {
      let dir = document.documentElement.getAttribute('dir');
      if (dir === 'rtl') {
        document.documentElement.setAttribute('dir', 'ltr');
        localStorage.setItem('dir', 'ltr');
        rtlToggle.innerHTML = '<i class="fas fa-exchange-alt"></i>';
      } else {
        document.documentElement.setAttribute('dir', 'rtl');
        localStorage.setItem('dir', 'rtl');
        rtlToggle.innerHTML = '<i class="fas fa-exchange-alt"></i>';
      }
    });
  }

  // Scroll Reveal
  function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      }
    }
  }
  window.addEventListener('scroll', reveal);
  reveal(); // trigger once on load
});
