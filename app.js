const wallpaper = document.querySelector('.wallpaper')
const nav = document.querySelector('nav')

wallpaper.style.height = window.screen.availHeight;

window.addEventListener('scroll', function () {
    wallpaper.style.opacity = 1 - +this.window.pageYOffset / 1000 + ''
})

window.addEventListener('scroll', function () {
    nav.style.opacity = 0 + +this.window.pageYOffset / 750 + ''
})
