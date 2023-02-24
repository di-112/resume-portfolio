const modalsData = [
    {
        id: "game-for-memory",
        name: 'Игра для развития памяти',
        description: 'Игра, в которой необходимо за отведенное время открыть все парные ячейки',
        stack: 'React, TS, Redux, Framer Motion, Scss, Eslint, Webpack',
        url: 'https://di-112.github.io/game-for-memory-react',
        githubUrl: 'https://github.com/di-112/game-for-memory-react',
    },
    {
        id: "books-shop",
        name: 'Магазин книг',
        description: 'Проект представляет из себя небольшой магазин книг с возможностью фильтрации товаров и их добавлением в корзину',
        stack: 'React, TS, Zustand, Material UI, React Query, Eslint, Vite',
        url: 'https://di-112.github.io/books-shop/',
        githubUrl: 'https://github.com/di-112/books-shop'
    },
    {
        id: "bets-statistics",
        name: 'Аналитика ставок на футбол',
        description: 'Приложение предназначено для ведения стастики ставок на футбол с возможностью выбора лиги. Реализован собственный backend и развернут сервер на ru vds',
        stack: 'React, TS, AntDesign, MobX, Axios, Eslint, Webpack',
        stackBack: 'Sqlite, Knex, Express',
        url: 'http://195.133.48.137:3000',
        githubUrl: 'https://github.com/di-112/bets-statistics-react'
    },
    {
        id: "layout-web-development-company",
        name: 'Верстка шаблона it-компании',
        description: 'Отзывчивая, адаптивная верстка макета',
        stack: 'Pug, Scss, Vanilla JS, Gulp',
        url: 'https://di-112.github.io/layout-web-development-company',
        githubUrl: 'https://github.com/di-112/layout-web-development-company'
    },
    {
        id: "mortgage-calculator",
        name: 'Калькулятор для расчета ипотеки',
        description: 'Приложения является формой с динамичными полями для вычисления значений',
        stack: 'React, AntDesign, CRA',
        url: 'https://di-112.github.io/mortgage-calculator',
        githubUrl: 'https://github.com/di-112/mortgage-calculator'
    }
]

const buttons = document.querySelectorAll('.works__item button')
const modalNode = document.querySelector('.modal')
const headerContent = document.querySelector('.header__content')
const modalButtonClose = document.querySelector('.modal__close')
const modalOverlay = document.querySelector('.modal__overlay')


const openModal = () => {
    modalNode.classList.add('open')
    document.body.style.overflowY = 'hidden'
   /* document.body.style.paddingRight = '8px'
    headerContent.style.paddingRight = '8px'*/
}

const hideModal = () => {
    modalNode.classList.remove('open')
    document.body.style.overflowY = 'auto'
  /*  document.body.style.paddingRight = '0'
    headerContent.style.paddingRight = '0'*/
}

modalButtonClose.addEventListener('click' , hideModal)

modalOverlay.addEventListener('click', hideModal)

console.log({buttons})

buttons.forEach(button => button.addEventListener('click', event => {
    const modalData = modalsData.find(({ id }) => id === event.target.dataset?.projectid)

    console.log(event.target.dataset)

    console.log({modalData})

    modalNode.querySelector('.modal__title').textContent = modalData.name
    modalNode.querySelector('.description__content').textContent = modalData.description
    if(modalData.stackBack) {
        modalNode.querySelector('.stack__content').innerHTML = `<div>${modalData.stack}</div><br/><div>${modalData.stackBack}</div>`
    } else {
        modalNode.querySelector('.stack__content').textContent = modalData.stack
    }
    modalNode.querySelector('.modal__img').style.background = `url(${modalData.img}) center / cover`
    modalNode.querySelector('.url__content').href = modalData.url
    modalNode.querySelector('.url__content').textContent = modalData.url
    modalNode.querySelector('.github-url__content').href = modalData.githubUrl
    modalNode.querySelector('.github-url__content').textContent = modalData.githubUrl

    openModal()
}))
