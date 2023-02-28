const projects = document.querySelectorAll('.portfolio__item')
const next = document.querySelector('.portfolio__button-next')
const prev = document.querySelector('.portfolio__button-prev')

let currentIndex = projects.length - 1

next.addEventListener('click', () => {
    if(projects[currentIndex - 1]) { // Обратный порядок слайдов
        if(prev.classList.contains('disabled')) {
            prev.classList.remove('disabled')
        }
        projects[currentIndex].classList.add('hide')
        projects[currentIndex].classList.remove('active')
        currentIndex = currentIndex - 1
        projects[currentIndex].classList.add('active')

        if(currentIndex === 0) {
            next.classList.add('disabled')
        }
    }
})

prev.addEventListener('click', () => {
    if(projects[currentIndex + 1]) {
        if(next.classList.contains('disabled')) {
            next.classList.remove('disabled')
        }
        projects[currentIndex + 1].classList.remove('hide')
        projects[currentIndex].classList.remove('active')
        currentIndex = currentIndex + 1
        projects[currentIndex].classList.add('active')
    }

    if(currentIndex === projects.length - 1) {
        prev.classList.add('disabled')
    }
})
