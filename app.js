const header = document.getElementById('fade')
const arrow = document.getElementById('scroll')
window.addEventListener('scroll', function () {
    header.style.opacity = 1 - +this.window.pageYOffset / 1000 + ''
    arrow.style.opacity = 1 - +this.window.pageYOffset / 1000 + ''
})

const faders = document.querySelectorAll('.fade-in');
const appearOptions = {
    threshhold: 1,
    rootMargin: '0px 0px -400px 0px'
}
const appearOnSCroll = new IntersectionObserver
    (function (entries, appearOnSCroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            else {
                entry.target.classList.add('appear');
                appearOnSCroll.unobserve(entry.target);
            }
        })
    },
        appearOptions);

faders.forEach(fader => {
    appearOnSCroll.observe(fader);
})