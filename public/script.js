document.addEventListener('DOMContentLoaded', function() {
    
    const categoryChangerBtn = document.querySelectorAll('#categoryChanger');
    const menuDropDown = document.getElementById('menuDropDown');
    const menuToggler = document.getElementById('menuToggler');
    const header = document.getElementById('masthead');

    menuToggler.addEventListener('click', () => {
        menuDropDown.classList.toggle('menu-items--menu-active');
    });

    window.addEventListener('scroll', () => {
        scrollY > 10 
        ? header.classList.add('main-header--scroll')
        : header.classList.remove('main-header--scroll')
    });

    for (let i = 0; i < categoryChangerBtn.length; i++) {
        categoryChangerBtn[i].addEventListener('click', (event) => {
            let selectedBtn = event.target;
            
            if (selectedBtn.hasAttribute("data-category")) {
                const selectedCategory = selectedBtn.getAttribute("data-category");
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
});
