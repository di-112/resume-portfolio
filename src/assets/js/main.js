//= swiper.js
//= sphere.js
//= modals.js
//= scroll.js


function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('show');
    }
  });
}
const options = { threshold: [0.5] };

const observer = new IntersectionObserver(onEntry, options);

document.querySelectorAll('section').forEach(element => observer.observe(element));


