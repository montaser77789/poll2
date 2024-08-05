document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    const menu = document.getElementById('menu');
  
    menuIcon.addEventListener('click', () => {
      menu.style.display = 'flex';
    });
  
    closeIcon.addEventListener('click', () => {
      menu.style.display = 'none';
    });
  
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.style.display = 'none';
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  });
  