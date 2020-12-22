//Show Menu when the mobile icon is clicked

const showMenu = (toggleId, navId)=> {
    const toggle = document.getElementById(toggleId)
    const nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

//Remove Menu Mobile
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    //When any nav__link is clicked, show-menu class will be removed
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click', linkAction))

/* -----------SCROLL SECTIONS ACTIVE LINK ------------- */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current=>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


// CHANGE BACKGROUND HEADER
function scrollHeader(){
    const nav = document.getElementById('header')
    //when the scroll is greater than 200 vh, add the scroll-header class
    if(this.scrollY >= 200){
        nav.classList.add('scroll-header');
    }else{
        nav.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader)


//SHOW SCROLL TOP
function scrollTop(){
    const scrollTopEl = document.getElementById('scroll-top')
    //when the scroll is greater than 560 vh, add the scroll-header class
    if(this.scrollY >= 560){
        scrollTopEl.classList.add('scroll-top');
    }else{
        scrollTopEl.classList.remove('scroll-top');
    }
}
window.addEventListener('scroll', scrollTop)

/*====================== DARK LIGHT THEME===================*/
const themeButton = document.getElementById('theme-button')
const darktheme = 'dark-theme'

//Previiously selected theme if selected
const selectedTheme = localStorage.getItem('selected-theme')

//obtain the current theme that the interface has by validationg the dark-theme
const getCurrentTheme = ()=> document.body.classList.contains(darktheme) ? 'dark': 'light'
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark'? 'add': 'remove'](darktheme)
}




// ACTIVATE/DEACTIVATE THEME MANUALLY
themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darktheme)

    //save the theme
    localStorage.setItem('selected-theme', getCurrentTheme())
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 2000,
    reset: true
})

sr.reveal(`.home__data, .home__img, .about__data, .about__img,
.services__content, .menu__content, .app__data, .app__img,
.contact__data, .contact__button, .footer__content`,{
    interval: 200
}) 