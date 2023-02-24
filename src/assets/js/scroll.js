const scrollTo = element => element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"})

document.querySelectorAll('nav a').forEach(linkNode => {
  linkNode.addEventListener('click', event => {
    event.preventDefault()

    scrollTo(document.querySelector('#' + event.target.dataset.path))
  })
})

document.querySelector('.preview__button').addEventListener('click', () => {
  scrollTo(document.querySelector('#skills'))
})

function progressBar() {
  const scrollTop = document.documentElement.scrollTop;
  const maxScrollTop = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.querySelector('.progress').style.width = scrollTop / maxScrollTop * 100 + '%';
}

const throttleProgressBar = throttle(progressBar, 300)

window.addEventListener('load', progressBar)
window.addEventListener('resize', throttleProgressBar)
window.addEventListener('scroll', throttleProgressBar, {
  passive: true
});


function onEntry(entry) {
  entry.forEach(change => {
    if(change.target.classList.contains('show')) {
      change.target.classList.remove('show');
    }
    if (change.isIntersecting) {
      change.target.classList.add('show');
    }
  });
}
const options = { threshold: [0.5] };

const observer = new IntersectionObserver(onEntry, options);

document.querySelectorAll('section').forEach(element => observer.observe(element));

let activeLink = null


const findActiveLink = () => {
  const activeSection = document.querySelector('section.show')

  if(activeSection) {
    if(activeLink) {
      activeLink.classList.remove('active')
    }
    const navLink = document.querySelector(`.nav__item a[data-path='${activeSection.id}']`)

    navLink.classList.add('active')

    activeLink = navLink
  }

}

window.addEventListener('scroll', findActiveLink, {
  passive: true
})

document.addEventListener('DOMContentLoaded', ()=> {
  findActiveLink()
})
