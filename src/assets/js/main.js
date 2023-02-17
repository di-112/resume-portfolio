//= swiper.js
//= sphere.js
//= modals.js
//= cursor.js


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


function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('section');
for (let elm of elements) {
  observer.observe(elm);
}

document.addEventListener('scroll', event => {
  console.log(document.body.scrollTop)
})