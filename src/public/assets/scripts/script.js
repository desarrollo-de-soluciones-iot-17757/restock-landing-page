const hamburgerBtn = document.getElementById('hamburgerBtn');
      const mobileMenu   = document.getElementById('mobileMenu');
      const menuClose    = document.getElementById('menuClose');
      const menuBackdrop = document.getElementById('menuBackdrop');

      function openMenu() {
        mobileMenu.classList.add('is-open');
        mobileMenu.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }

      function closeMenu() {
        mobileMenu.classList.remove('is-open');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }

      hamburgerBtn.addEventListener('click', openMenu);
      menuClose.addEventListener('click', closeMenu);
      menuBackdrop.addEventListener('click', closeMenu);

      mobileMenu.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', closeMenu);
      });