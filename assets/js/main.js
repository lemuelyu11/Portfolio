// Show menu
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// Remove menu mobile
const navLink = document.querySelectorAll('.nav__link')

// Get rid of menu after clicking 
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Scroll sections active link
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
    reset: true
})

sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})

sr.reveal('.about__img', {delay: 400})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 400})
sr.reveal('.about__social-icon', {delay: 400})

sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 25, interval: 50})
sr.reveal('.skills__img', {delay: 400})

sr.reveal('.portfolio__img', {interval: 200})

sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
