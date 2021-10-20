export default function calcScrollBar() {
    const div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    document.body.append(div);
    const scrollBar = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollBar;
}