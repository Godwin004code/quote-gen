const open_btn = document.querySelector('#open');
const close_btn = document.getElementById('close')
const nav = document.querySelector('nav')

open_btn.addEventListener('click', function() {
    nav.classList.add('visible')
})

close_btn.addEventListener('click', function() {
    nav.classList.remove('visible')
})


// change bg on scroll

const header = document.querySelector('header')

window.addEventListener('scroll', function() {
    const height = window.innerHeight
    const scrol = window.scrollY
    if(scrol > height - 90) {
        header.classList.add('transit')
    } else {
        header.classList.remove('transit')
    }
})

