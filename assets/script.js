/* navigation bar */
const mobileMenu = document.querySelector('.mobile_menu')
const navMenu = document.querySelector('.navigation_menu')

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active')
    mobileMenu.classList.toggle('active')
})

window.onscroll = ()=> {
    if(mobileMenu.attributes[0].nodeValue.includes('active')){
        mobileMenu.classList.remove('active')
        navMenu.classList.remove('active')
    }
}


/* Project section events */
const projectCards = document.querySelectorAll('.project_card')
let currentimgActive = document.querySelector('.active')
let currenttextActive = document.querySelector('.t_active')
currentimgActive.childNodes[3].style.display = 'none'

projectCards.forEach(card => card.addEventListener('click', ()=> {
    const key = document.querySelector(`article[data-key="${card.attributes[1].nodeValue}"]`)
    currentimgActive.classList.remove('active')
    currentimgActive.classList.add('not-active')
    currentimgActive.childNodes[3].style.display = 'block'
    currentimgActive = card
    card.childNodes[3].style.display = 'none'
    currenttextActive.classList.remove('t_active')
    currenttextActive.classList.add('t_not-active')
    currenttextActive = key
    card.classList.remove('not-active')
    card.classList.add('active')
    key.classList.remove('t_not-active')
    key.classList.add('t_active')
}))

/* subscribe validation */
 
const subsBtn = document.querySelector('.subs_btn')
const subsInput = document.querySelector('.subs_input')
const mess = document.querySelector('.msg')

// show input error message
function showError(input, message) {
    input.className = 'subs_input error'
    mess.className = 'msg active'
    mess.innerHTML = message
  }

// show success message
function showSuccess(input) {
    input.className = 'subs_input success'
    mess.className = 'msg not-active'
}


//check email is valid
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      showSuccess(input);
    } else {
      showError(input, 'Email is not valid');
    }
}

subsBtn.addEventListener('click', function (e) {
    e.preventDefault();

    checkEmail(subsInput)
})
