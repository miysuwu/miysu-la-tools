(() => {
  const menuBtn = document.getElementById('menuBtn');
  const menuDropdown = document.getElementById('menuDropdown');

  if (!menuBtn || !menuDropdown) return;

  const normalizePath = (path) => {
    const clean = path.replace(/\/+$/, '');
    return clean || '/';
  };

  const currentPath = normalizePath(window.location.pathname);

  menuDropdown.querySelectorAll('a[href]').forEach((link) => {
    const linkPath = normalizePath(new URL(link.href, window.location.href).pathname);
    const active = linkPath === currentPath;

    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });

  menuBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    const open = menuDropdown.classList.toggle('show');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  document.addEventListener('click', () => {
    menuDropdown.classList.remove('show');
    menuBtn.setAttribute('aria-expanded', 'false');
  });

  menuDropdown.addEventListener('click', (event) => {
    event.stopPropagation();
  });
})();
