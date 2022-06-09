const hoverOver =document.querySelector('.secret')
const darkBtn = document.querySelector('.dark-mode')
const cardCtn = document.getElementById('container')



hoverOver.addEventListener('mouseover', function(evt){
  evt.target.style.opacity = ".1"
})
  
hoverOver.addEventListener('mouseout', function(evt){
  evt.target.style.opacity = ""
})