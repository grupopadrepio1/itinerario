document.addEventListener('DOMContentLoaded', () => {
  // Funcionalidade da barra de progresso
  const progressBar = document.getElementById('progressBar');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollProgress = (scrollTop / scrollHeight) * 100;
      progressBar.style.width = `${scrollProgress}%`;
    });
  }

  // Botão "Voltar ao Topo"
  const backToTopButton = document.getElementById('backToTop');
  if (backToTopButton) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
      } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
      }
    });

    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // IntersectionObserver para animações
  const sections = document.querySelectorAll('.fade-in, .slide-up');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => observer.observe(section));

  // Rolagem suave para links de âncoras
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Funcionalidade do menu hambúrguer
  const hamburger = document.querySelector('.hamburger');
  const navMenuContainer = document.querySelector('.nav-menu-container');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-pill');

  if (hamburger && navMenuContainer && navMenu) {
    hamburger.addEventListener('click', () => {
      console.log('Hamburger clicked, toggling menu');
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !isExpanded);
      hamburger.classList.toggle('active');
      navMenuContainer.classList.toggle('active');
      navMenuContainer.classList.toggle('hidden'); // Remover/adicionar hidden
      navMenu.classList.toggle('active');
      console.log('navMenuContainer classes:', navMenuContainer.classList.toString());

      // Gerenciar foco para acessibilidade
      if (!isExpanded) {
        setTimeout(() => {
          navLinks[0].focus();
        }, 300); // Pequeno atraso para garantir que o menu esteja visível
      }
    });

    // Fechar menu ao clicar em um link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        console.log('Nav link clicked, closing menu');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.classList.remove('active');
        navMenuContainer.classList.remove('active');
        navMenuContainer.classList.add('hidden');
        navMenu.classList.remove('active');
      });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        console.log('Clicked outside, closing menu');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.classList.remove('active');
        navMenuContainer.classList.remove('active');
        navMenuContainer.classList.add('hidden');
        navMenu.classList.remove('active');
      }
    });

    // Fechar menu ao pressionar a tecla Esc
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && hamburger.getAttribute('aria-expanded') === 'true') {
        console.log('Escape pressed, closing menu');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.classList.remove('active');
        navMenuContainer.classList.remove('active');
        navMenuContainer.classList.add('hidden');
        navMenu.classList.remove('active');
        hamburger.focus();
      }
    });

    // Gerenciar navegação por teclado
    navLinks.forEach((link, index) => {
      link.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          if (index === navLinks.length - 1 && !e.shiftKey) {
            e.preventDefault();
            hamburger.focus();
          } else if (index === 0 && e.shiftKey) {
            e.preventDefault();
            hamburger.focus();
          }
        }
      });
    });
  } else {
    console.error('Erro: Elementos do menu hambúrguer não encontrados', {
      hamburger,
      navMenuContainer,
      navMenu
    });
  }
});