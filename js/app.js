const hoverOver =document.querySelector('.secret')
const desc = document.querySelector('.imgDesc')


hoverOver.addEventListener('mouseover', function(evt){
  evt.target.style.opacity = ".1"
  // desc.style.display = "I like trtles!!"
})

hoverOver.addEventListener('mouseout', function(evt){
  evt.target.style.opacity = ""
  // desc.style.display = 'none'
  })