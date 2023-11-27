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


// Select the button
const btn = document.querySelector(".btn-toggle");
// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");

// Listen for a click on the button
btn.addEventListener("click", function() {
  // If the current URL contains "ligh-theme.css"
  if (theme.getAttribute("href") == "light-theme.css") {
    // ... then switch it to "dark-theme.css"
    theme.href = "dark-theme.css";
  // Otherwise...
  } else {
    // ... switch it to "light-theme.css"
    theme.href = "light-theme.css";
  }
});