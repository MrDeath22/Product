let elSiteNav = document.querySelector('.site-nav');
let elOpenBtn = document.querySelector('.site-menu__btn');

elOpenBtn.addEventListener('click', () => {
  elSiteNav.classList.toggle('show');
})