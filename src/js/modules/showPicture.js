import calcScrollBar from "./calcScrollBar";

function showPic() {
    const pictures = document.querySelectorAll('.preview');

    class SettingUpTheImage {
        constructor(image) {
            this.image = image;
        }

        createModal() {
            const el = document.createElement('div');
            el.classList.add('popup');
            el.style.display = 'flex';
            el.style.justifyContent = 'center';
            el.style.alignItems = 'center';
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = `${calcScrollBar()}px`;
            el.innerHTML = `
                <img class="popup__contentCenter" src="${this.image}" alt="window"></a>
            `;
            document.body.append(el);
            el.addEventListener('click', (e) => {
                if (e.target === el) {
                    el.style.display = 'none';
                    document.body.style.overflow = '';
                    document.body.style.marginRight = `0px`;
                    el.remove();
                }
            });
        }
    }

    pictures.forEach((item, i) => {
        item.addEventListener('click', () => {
            new SettingUpTheImage(`assets/img/our_works/big_img/${i + 1}.png`).createModal();
        });
    });
}

export default showPic;