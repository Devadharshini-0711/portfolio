//menu

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show')
        });
        
    }
}
showMenu('nav_toggle','nav_menu')

//active & remove active
const navLink = document.querySelectorAll('.nav_link')
navLink.forEach(n=> n.classList.remove('active'))

function linkAction() {
    navLink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')

    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

//message
   document.getElementById('contact-btn').addEventListener('click',function(){
    const email='devadharshini439@gmail.com';
    const subject = 'hello from my portfolio';
    const body = 'Hi....';
    const mailtoLink = 'mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}';

    window.location.href = mailtoLink;
   })

       

    


