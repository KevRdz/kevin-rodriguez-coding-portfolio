const hoverOver =document.querySelector('.secret')
const vanish = document.querySelector('#images')
const opLight = document.querySelector('#img2')
const opMed = document.querySelector('#img3')



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

opLight.addEventListener('mouseout', function(evt){
  evt.target.style.opacity = ".7"
})

opLight.addEventListener('mouseout', function(evt){
  evt.target.style.opacity = ""
})

opMed.addEventListener('mouseout', function(evt){
  evt.target.style.opacity = ".2"
})

opMed.addEventListener('mouseout', function(evt){
  evt.target.style.opacity = ""
})