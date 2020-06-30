import { scrollTo, toggleClass } from './helpers'

(function () {
    scrollTo('#scroll_one_screen', '#team');
    scrollTo('#activate-btn-scroll', '#activate-block');

    toggleClass('#activate-button-wrap', '.activate-form-wrap', 'active');
    toggleClass('#request-button-wrap', '.request-form-wrap', 'active');

})()

