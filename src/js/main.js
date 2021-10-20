import './slider';
import modal from './modules/modal';
import tabs from './modules/tabs';
import sendForm from './modules/sendingForms';
import changeObjectState from './modules/changeModalState';
import timer from './modules/timer';
import showPic from './modules/showPicture';

document.addEventListener('DOMContentLoaded', () => {

    const ObjectToSend = {
        form: 0,
        type: 'tree',
        profile: 'Холодное'
    };
    
    modal();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active_class');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img img', 'do_image_more', 'inline-block');
    sendForm(ObjectToSend);
    changeObjectState(ObjectToSend);
    timer('#timer', '11-01-21');
    showPic();
    
});
