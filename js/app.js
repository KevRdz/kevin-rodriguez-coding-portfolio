const hoverOver =document.querySelector('.secret')
const cardCtn = document.getElementById('container')
const lightDarkBtn = document.querySelector('#dark-light-mode')
const body = document.querySelector('body')



hoverOver.addEventListener('mouseover', function(evt){
  evt.target.style.opacity = ".1"
})
  
hoverOver.addEventListener('mouseout', function(evt){
  evt.target.style.opacity = ""
})
