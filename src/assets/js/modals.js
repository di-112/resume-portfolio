const buttons = document.querySelectorAll('.working__block, .portfolio__item button')
const modalButtonClose = document.querySelectorAll('.modal__close')
const modalOverlay = document.querySelectorAll('.modal__overlay')

const openModal = (id) => {
    if (!id) {
        return
    }
    const modalNode = document.querySelector(`.modal.${id}`)
    modalNode.classList.add('open')
    document.body.style.overflowY = 'hidden'
}

const hideModal = () => {
    const modalNode = document.querySelector(`.modal.open`)
    modalNode.classList.remove('open')
    document.body.style.overflowY = 'auto'
}

modalButtonClose.forEach(button => button.addEventListener('click', hideModal))

modalOverlay.forEach(overlay => overlay.addEventListener('click', hideModal))


window.addEventListener('load',() => {
    console.log(document.body.classList)
    document.body.classList.remove('preload')
})

buttons.forEach(button => button.addEventListener('click', event => {
    openModal(event.target.dataset?.projectid)
}))
