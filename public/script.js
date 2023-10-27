const menuToggler = document.getElementById('menuToggler');
const menuDropDown = document.getElementById('menuDropDown');

const scrollY = window.scrollY;
const header = document.getElementById('masthead');

// Activate mobile menu dropdown
menuToggler.addEventListener('click', () =>{
    menuDropDown.classList.toggle('menu-items--menu-active');
});

// change header colors
window.addEventListener('scroll', () => {
    scrollY > "1" 
    ? header.classList.add('main-header--scroll')
    : header.classList.remove('main-header--scroll')
});


const categoryChangerBtn = document.querySelectorAll('#categoryChanger');


for (let i = 0; i < categoryChangerBtn.length; i++) {
    categoryChangerBtn[i].addEventListener('click', (e) => {
        let a = e.target;
        
        if (a.hasAttribute("data-category")) {
            const selectedCategory = a.getAttribute("data-category");
            const allLabels = document.querySelectorAll('[aria-label]');

            for (let i = 0; i < allLabels.length; i++) {
                const label = allLabels[i];
                const labelCategory = label.getAttribute('aria-label');
                
                if (selectedCategory === 'all') {
                    label.classList.remove('block--scale-grey');
                } else if (labelCategory === selectedCategory) {
                    label.classList.remove('block--scale-grey');
                } else {
                    label.classList.add('block--scale-grey');
                }
            }
        }
    });
}

