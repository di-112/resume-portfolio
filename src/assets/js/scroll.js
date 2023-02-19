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

window.addEventListener('load', progressBar)
window.addEventListener('resize', progressBar)
window.addEventListener('scroll', progressBar, {
  passive: true
});