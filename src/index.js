import './index.scss';

import header from './js/components/header';
import form from './js/utils/form';
import burger from './js/components/burger';
import scroll from './js/components/scroll';


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
});
