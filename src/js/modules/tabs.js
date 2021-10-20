'use strict';

const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);
    
    function hideTabContent() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tab.forEach(item => {
            item.classList.remove(activeClass);
        });

        if (tabSelector == '.glazing_block') {
            document.querySelectorAll(`${tabSelector} a`).forEach(item => {
                item.classList.remove(activeClass);
            });
        } 
    }

    function showTabContent(i = 0) {
        content[i].style.display = display;
        tab[i].classList.add(activeClass);

        if (tabSelector == '.glazing_block') {
            document.querySelectorAll(`${tabSelector} a`)[i].classList.add(activeClass);
        } 
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        if (target &&
            (target.classList.contains(tabSelector.replace(/\./, "")) || 
        target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tab.forEach((item, i) => {
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }

                if (tabSelector == '.no_click') {
                    const el = document.querySelectorAll(`${tabSelector} a`);
                    el.forEach(item => {
                        item.classList.remove('decoration__active-class_blue');
                    });
                    el[i].classList.add('decoration__active-class_blue');
                } 
            });
        }
    });
}; 

export default tabs;




