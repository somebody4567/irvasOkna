import calcScrollBar from './calcScrollBar';

function modal() {
    function openDefinedModal(triggerSelector, modalSelector, closeSelector, closeModalByBG = true) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector),
              window = document.querySelectorAll('[data-modal]'),
              scroll = calcScrollBar();

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                if (modal.getAttribute('data-next') === 'start' && modal.classList.contains('show')) {
                    return;
                } else {
                    window.forEach(item => {
                        item.classList.add('hide');
                        item.classList.remove('show');
                    });
                    e.preventDefault();
                    modal.classList.add('show');
                    modal.classList.remove('hide');
                    document.body.style.overflow = 'hidden';
                    document.body.style.marginRight = `${scroll}px`;
                    clearInterval(timeout);
                }
            });
        });

        close.addEventListener('click', (e) => {
            window.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show');
            });
            e.preventDefault();
            closeModal();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal && closeModalByBG) {
                window.forEach(item => {
                    item.classList.add('hide');
                    item.classList.remove('show');
                });
                closeModal();
            }
        });

        function closeModal() {
            modal.classList.remove('show');
            modal.classList.remove('hide');
            document.body.style.overflow = '';
            document.body.style.marginRight = `0px`;
        }
    }

    const timeout = setTimeout(() => {
        document.querySelector('.popup').classList.add('show');
    }, 60000);
    
    openDefinedModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    openDefinedModal('.phone_link', '.popup', '.popup .popup_close');
    openDefinedModal('.glazing_price_btn', '.popup_calc', '.popup_calc .popup_calc_close');
    openDefinedModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
    openDefinedModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
}

export default modal;