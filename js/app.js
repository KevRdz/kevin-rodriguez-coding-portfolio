let hoverOver =document.getElementById('secret')

hoverOver.addEventListener('mouseover', function(evt){
  evt.target.style.opacity = ".1"
})

hoverOver.addEventListener('mouseout', function(evt){
  evt.target.style.opacity = ""
})