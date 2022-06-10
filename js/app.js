const hoverOver =document.querySelector('.secret')
const vanish = document.querySelector('.code-pic')



hoverOver.addEventListener('mouseover', function(evt){
  evt.target.style.opacity = ".1"
})
  
hoverOver.addEventListener('mouseout', function(evt){
  evt.target.style.opacity = ""
})

vanish.addEventListener('mouseover', function(evt){
  evt.target.style.opacity = "0"
})

vanish.addEventListener('mouseout', function(evt){
  evt.target.style.opacity = ""
})
