import { projectData } from "./project-data.js"

const cardCtn = document.getElementById('container')


let projectInfo = projectData.map(project =>
  `
  <div class="card" style="width: 18rem;">
  <img src="${project.image}" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">${project.title}</h5>
  <p class="card-text">${project.description}</p>
  <a href="${project.github}" class="btn btn-primary">GitHub</a>
  <a href="${project.deployment}" class="btn btn-sec">Deployment</a>
  </div>
  </div>
  `
  ).join('')
  
cardCtn.innerHTML = projectInfo