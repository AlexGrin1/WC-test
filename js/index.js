const burgerLogo =document.querySelector('.burger-logo')
const burgerMenu = document.querySelector('.burger-menu')

burgerLogo.addEventListener("click", (ev)=>{
    burgerMenu.classList.toggle('hide')
    setTimeout(()=>{burgerMenu.classList.toggle('show-menu')},0) 
})