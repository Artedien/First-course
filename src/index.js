import './index.scss';

import header from './js/components/header';
import form from './js/utils/form';
import burger from './js/components/burger';
import scroll from './js/components/scroll';
import timer from './js/components/timer';
import preloader from './js/components/preloader';

window.addEventListener('DOMContentLoaded', () => {
    try {
        header();
    } catch {}
    try {
        form();
    } catch {}
    try {
        burger();
    } catch {}
    try {
        scroll();
    } catch {}
    try {
        timer(".main-hero__date-counter", 19);
    } catch {}
});

window.addEventListener('load', function () {
    preloader();
});
