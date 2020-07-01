export function scrollTo(clicked, scrolled) {
    const clickedElem = document.querySelector(clicked)
    const scrollToElem = document.querySelector(scrolled)

    clickedElem.addEventListener('click', function() {
        scrollToElem.scrollIntoView({ block: "start", behavior: "smooth" })
    });
}

export function toggleClass(clickElem, toggleElem, toggleClass) {
    document.querySelector(clickElem).addEventListener('click', function () {
        document.querySelector(toggleElem).classList.toggle(toggleClass)
    })
}