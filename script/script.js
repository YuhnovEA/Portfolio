const modalWindowBtn = document.querySelector('.hero__form__button')
modalWindowBtn.addEventListener('click', test)
function test(event) {
    event.preventDefault()
    document.querySelector('.modal-window').classList.toggle('none')
}