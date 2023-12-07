// Get the menu nav to add active to
var volet = document.getElementsByClassName("volet");

// Get the button that opens the menu
var iconX = document.getElementsById("iconX");

// Get the span that closes modal
var span = document.getElementsByClassName("close");

// Get the modal



/***********************************************/
/***********************************************/
/**************  NAVIGATION BAR ****************/
/***********************************************/
/***********************************************/

const links = document.querySelectorAll("nav li");

iconX.addEventListener("click",() => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
    link.addEventListener('click', () => {
        nav.classList.remove("active");
    });
});
/***********************************************/
/***********************************************/
/*************** END OF NAV BAR ****************/
/***********************************************/
/***********************************************/




/***********************************************/
/***********************************************/
/************  DARK MODE TOGGLE ****************/
/***********************************************/
/***********************************************/

const page = document.querySelector(".page");
const toggle = page.querySelector(".theme-switch__checkbox");
// const toggleIcon = page.querySelector(".toggle-icon");

// set theme and localStorage on page load
setCheckedState();

function setCheckedState() {
  // checks if localStorage has a "checked" value set at all
  if (!(localStorage.checked === undefined)) {
    // if it does, it sets the state of the toggle accordingly
    toggle.checked = isTrue(localStorage.getItem("checked"));
    // after setting the toggle state, the theme is adjusted according to the checked state
    toggleTheme();
  }
}

function toggleTheme() {
  // Toggle theme based on state of checkbox
  if (toggle.checked) {
    page.classList.replace("light", "dark");
  } else {
    page.classList.replace("dark", "light");
  }
  // set the value of the "checked" key in localStorage
  localStorage.setItem("checked", toggle.checked);
}

function isTrue(value) {
  // convert string to boolean
  return value === "true";
}

// Toggle theme any time the state of the checkbox changes
toggle.addEventListener("change", toggleTheme);

/***********************************************/
/***********************************************/
/***********************************************/
/***********************************************/
/***********************************************/


/** Il faudrait une fonction qui permette que n'importe quel click ou touch ailleurs 
 * que le sur le menu ferme le menu **/
// et il faudrait aussi une petite croix en haut du menu ul pour fermer explicitement ce menu

