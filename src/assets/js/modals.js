const modalsData = [
    {
        id: "game-for-memory",
        name: 'Игра для развития памяти',
        description: 'Игра, в которой необходимо за отведенное время открыть все парные ячейки',
        stack: 'React, TS, Redux, Framer Motion, Scss, Webpack',
        url: 'https://di-112.github.io/game-for-memory-react/',
        githubUrl: 'https://github.com/di-112/game-for-memory-react',
        img: 'assets/images/works/game-for-memory.png'
    },
    {
        id: "test2",
        name: 'TestName2',
        description: 'TestDescription2',
        stack: 'TestStack2',
        url: 'TestUrl2',
        img: 'assets/images/fake-project.jpg',
        githubUrl: 'TestGithubUrl2'
    }
]

const buttons = document.querySelectorAll('.works__item button')
const modalNode = document.querySelector('.modal')
const modalButtonClose = document.querySelector('.modal__close')
const modalOverlay = document.querySelector('.modal__overlay')


const openModal = () => {
    modalNode.classList.add('open')
    document.body.style.overflowY = 'hidden'
    document.body.style.paddingRight = '8px'
}

const hideModal = () => {
    modalNode.classList.remove('open')
    document.body.style.overflowY = 'auto'
    document.body.style.paddingRight = '0'
}

modalButtonClose.addEventListener('click' , hideModal)

modalOverlay.addEventListener('click', hideModal)

buttons.forEach(button => button.addEventListener('click', event => {
    const modalData = modalsData.find(({ id }) => id === event.target.dataset?.projectid)

    console.log({modalData})

    modalNode.querySelector('.modal__title').textContent = modalData.name
    modalNode.querySelector('.description__content').textContent = modalData.description
    modalNode.querySelector('.stack__content').textContent = modalData.stack
    modalNode.querySelector('.modal__img').style.background = `url(${modalData.img}) center / cover`
    modalNode.querySelector('.url__content').href = modalData.url
    modalNode.querySelector('.url__content').textContent = modalData.url
    modalNode.querySelector('.github-url__content').href = modalData.githubUrl
    modalNode.querySelector('.github-url__content').textContent = modalData.githubUrl

    openModal()
}))
