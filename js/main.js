let elSiteNav = document.querySelector('.site-nav');
let elOpenBtn = document.querySelector('.site-menu__btn');
let elBody = document.querySelector("body")

elOpenBtn.addEventListener('click', () => {
  elSiteNav.classList.toggle('show');
})

let darkLightbtn = document.querySelector('.dark-light-btn');
darkLightbtn.addEventListener('click', function() {
  elBody.classList.toggle('dark-content');
})



