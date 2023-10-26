const menuToggler = document.getElementById('menuToggler');
const menuDropDown = document.getElementById('menuDropDown');

// Activate mobile menu dropdown
menuToggler.addEventListener('click', () =>{
    menuDropDown.classList.toggle('menu-items--menu-active');
});