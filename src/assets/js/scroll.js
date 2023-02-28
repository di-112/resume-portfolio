const scrollTo = element => element.scrollIntoView({ behavior: "smooth", block: "start" })

document.querySelectorAll('nav a').forEach(linkNode => {
  linkNode.addEventListener('click', event => {
    event.preventDefault()
    scrollTo(document.querySelector('#' + event.target.dataset.path))
  })
})

document.querySelector('.preview__button').addEventListener('click', () => {
  scrollTo(document.querySelector('#about'))
})

function progressBar() {
  const scrollTop = document.documentElement.scrollTop;
  const maxScrollTop = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  document.querySelector('.progress').style.width = scrollTop / maxScrollTop * 100 + '%';
}

window.addEventListener('load', progressBar)
window.addEventListener('resize', progressBar)
window.addEventListener('scroll', progressBar, {
  passive: true
});

function onEntry(entry) {
  entry.forEach(change => {
    if(change.target.classList.contains('active')) {
      change.target.classList.remove('active');
    }

    if (change.isIntersecting) {
      change.target.classList.add('show');
      change.target.classList.add('active');
    }
  });
}

const observer = new IntersectionObserver(onEntry, { threshold: [0.25] });

document.querySelectorAll('section').forEach(element => observer.observe(element));

let activeLink = null

const findActiveLink = () => {
  const activeSection = document.querySelector('section.active')

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
  setTimeout(findActiveLink, 100)
})
