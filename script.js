
const projectName = 'tribute-page';


// theme swicher
//const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const toggleSwitch = document.getElementById('checkbox1');
const toggleSwitch2 = document.getElementById('checkbox2');
const currentTheme = 'light'//localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleSwitch.checked = true;
        //localStorage.setItem('theme', 'dark');
    }
    else {        
        document.documentElement.setAttribute('data-theme', 'light');
        toggleSwitch.checked = false;
        //localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
toggleSwitch2.addEventListener('change', switchTheme, false);


// hamburger / modified / https://jonsuh.com/hamburgers/
const hamburger = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".burger-menu");
const hamburgerBlur = document.querySelector(".burger-menu-blur");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("is-active");
  hamburgerMenu.classList.toggle('show');
  hamburgerBlur.classList.toggle('show');
});
