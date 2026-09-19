// モバイルのメニューを，ページ内リンクの選択時に閉じる．
document.addEventListener('click', (event) => {
  const link = event.target.closest('.navbar .nav-link');
  const nav = document.getElementById('navbarNav');
  if (link && nav?.classList.contains('show') && window.bootstrap) {
    bootstrap.Collapse.getOrCreateInstance(nav, { toggle: false }).hide();
  }
});

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const topButton = document.getElementById('backToTop');
if (topButton) {
  const updateButton = () => { topButton.hidden = window.scrollY < 300; };
  window.addEventListener('scroll', updateButton, { passive: true });
  topButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reduceMotion.matches ? 'auto' : 'smooth' });
    document.querySelector('.navbar-brand')?.focus({ preventScroll: true });
  });
  updateButton();
}

// 参考サイトと同じ，写真背景の控えめなパララックス．
const hero = document.querySelector('.hero.parallax');
if (hero) {
  let ticking = false;
  const update = () => {
    const rect = hero.getBoundingClientRect();
    const speed = parseFloat(getComputedStyle(hero).getPropertyValue('--speed')) || 0;
    const shift = reduceMotion.matches ? 0 : Math.min(Math.max(-rect.top, 0), rect.height) * speed;
    hero.style.setProperty('--shift', `${shift}px`);
    ticking = false;
  };
  const queueUpdate = () => {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  };
  window.addEventListener('scroll', queueUpdate, { passive: true });
  window.addEventListener('resize', queueUpdate);
  reduceMotion.addEventListener('change', queueUpdate);
  update();
}

