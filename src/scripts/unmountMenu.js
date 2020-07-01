export function unmountMenu(container, toggleElem, toggleClass) {
    window.addEventListener('click', function (e) {
        if (!document.querySelector(container).contains(e.target)) {
            document.querySelector(toggleElem).classList.remove(toggleClass)
            document.querySelector('#header-dropdown').checked = false
        }
    })

    window.addEventListener('scroll', function (e) {
        if (document.querySelector(toggleElem).classList.contains(toggleClass)) {
            document.querySelector(toggleElem).classList.remove(toggleClass)
            document.querySelector('#header-dropdown').checked = false
        }
    })

}
