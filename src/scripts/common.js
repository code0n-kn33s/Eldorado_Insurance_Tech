import { scrollTo, toggleClass } from './helpers'
import { unmountMenu } from './unmountMenu'

(function () {
    // srolling
    scrollTo('#scroll_one_screen', '#team');
    scrollTo('#activate-btn-scroll', '#activate-block');
    // activate forms
    toggleClass('#activate-button-wrap', '.activate-form-wrap', 'active');
    toggleClass('#request-button-wrap', '.request-form-wrap', 'active');
    // hamburger menu
    toggleClass('#header-dropdown', '#nav-icon3', 'open');
    unmountMenu('.header-dropdown', '#nav-icon3', 'open')
    //header menu
    scrollTo('#fullWork', '#instructions');
    scrollTo('#fullActivate', '#activate-block');
    scrollTo('#fullRequest', '#request');
    scrollTo('#smallWork', '#instructions');
    scrollTo('#smallActivate', '#activate-block');
    scrollTo('#smallRequest', '#request');
})()

