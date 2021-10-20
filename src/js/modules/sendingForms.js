'use strict';

import modal from './modal';

function sendForm(state) {
    modal();
    const forms = document.querySelectorAll('form');

    const messages = {
        loading: 'assets/slick/ajax-loader.gif',
        success: 'Спасибо, мы скоро с Вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    const postData = async (url, data) => {
        const result = await fetch(url, {
            method: "POST",
            body: data
        });

        return await result.text();
    };

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const spin = document.createElement('img');
            spin.src = messages.loading;
            form.append(spin);
            const formData = new FormData(form);
            if (form.getAttribute('form-end') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
            
            const textMessage = document.createElement('div');
            form.append(textMessage);
            postData('assets/server.php', formData)
                .then(() => {
                    spin.remove();
                    textMessage.textContent = messages.success;
                    textMessage.style.color = 'red';
                })
                .catch(() => {
                    spin.remove();
                    textMessage.textContent = messages.failure;
                })
                .finally(() => {
                    forms.forEach(form => {
                        form.reset();
                    });
                    setTimeout(() => {
                        textMessage.remove();
                        document.querySelectorAll('[data-modal]').forEach(item => {
                            item.classList.add('hide');
                            item.classList.remove('show');
                            document.body.style.overflow = '';
                            document.body.style.marginRight = `0px`;
                        });
                    }, 3000);
                });
        });     
    });
}

export default sendForm;

