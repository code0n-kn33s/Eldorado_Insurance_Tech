export function scrollTo(clicked, scrolled) {
    const clickedElem = document.querySelector(clicked)
    const scrollToElem = document.querySelector(scrolled)

    function handleButtonClick() {
        scrollToElem.scrollIntoView({ block: "start", behavior: "smooth" });
    }

    clickedElem.addEventListener('click', handleButtonClick);
}

export function toggleClass(clickElem, toggleElem, toggleClass) {
    console.log('clickElem', clickElem )
    console.log('toggleElem', toggleElem )
    console.log('toggleClass', toggleClass )
    document.querySelector(clickElem).addEventListener('click',
        function () {
            document.querySelector(toggleElem).classList.toggle(toggleClass)
        })
}