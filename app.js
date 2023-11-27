/************  NAVIGATION BAR ****************/
/************  NAVIGATION BAR ****************/

const links = document.querySelectorAll("nav li");

iconX.addEventListener("click",() => {
  nav.classList.toggle("active");
});

addEventListener("scroll",() => {
    nav.classList.remove("active");
});

links.forEach((link) => {
    link.addEventListener('click', () => {
        nav.classList.remove("active");
    });
});

/***************END OF NAV BAR ****************/


