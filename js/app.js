
const hoverOver =document.querySelector('.secret')
const darkBtn = document.querySelector('.dark-mode')

hoverOver.addEventListener('mouseover', function(evt){
  evt.target.style.opacity = ".1"
})

hoverOver.addEventListener('mouseout', function(evt){
  evt.target.style.opacity = ""
})

darkBtn.addEventListener('click', function(evt){
  
})

import { projectData } from ".project-data"