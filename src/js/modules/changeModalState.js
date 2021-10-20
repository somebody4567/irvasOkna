function changeObjectState(state) {
    const checkboxes = document.querySelectorAll('.checkbox'),
          windowForm = document.querySelectorAll('.balcon_icons_img'),
          windowWidth = document.querySelectorAll('#width'),
          windowHeight = document.querySelectorAll('#height'),
          windowViewType = document.querySelectorAll('#view_type');

    function validateInputs(elems) {
        const inputs = document.querySelectorAll(elems);
        inputs.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/\D/, '');
            });
        });
    }

    checkboxes[0].checked = true;
    
    const inp = document.querySelectorAll('.popup_calc_content input');
    inp.forEach((item) => {
        if (item.value == '') {
            item.style.border = '1px solid red';
        } 
        item.addEventListener('input', () => {
            if (document.querySelector('#width').value == '' || document.querySelector('#height').value == '') {
                document.querySelector('.popup_calc_button').setAttribute('disabled', true);
            } else {
                document.querySelector('.popup_calc_button').removeAttribute('disabled');
            }
            if (item.value == '') {
                item.style.border = '1px solid red';
            } else {
                item.style.border = '1px solid #ccc';
            }
        });
        if (item.value == '') {
            document.querySelector('.popup_calc_button').setAttribute('disabled', true);
        }
    });

    function setEvent(event, elem) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch (item.nodeName) {
                    case 'SPAN':
                        state.form = i;
                    break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state.profile = "Холодное" : state.profile = "Теплое";
                            elem.forEach((box, j) => {
                                box.checked = false;
                                if (i == j) {
                                    box.checked = true;
                                }
                            });
                        } else {
                            if (item.getAttribute('id') === 'width') {
                                state.width = item.value;
                            } else {
                                state.height = item.value;
                            }
                        }
                    break;
                    case 'SELECT': 
                        state.type = item.value;
                    break;
                }
            });
        });
    }

    setEvent('click', windowForm);
    setEvent('change', checkboxes);
    setEvent('input', windowWidth);
    setEvent('input', windowHeight);
    setEvent('change', windowViewType);

    validateInputs('.popup_calc_content input');
    validateInputs('input[name="user_phone"]');
}

export default changeObjectState;