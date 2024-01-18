function mudarImagem(imagem, num){
    imagem.src = `assets/projetos/projeto${num}_2.jpg`;
}

function voltarImagem(imagem, num){
    imagem.src = `assets/projetos/projeto${num}_1.jpg`;
}

function preencherProjeto(project){
    const projects = document.querySelector('.projects');
    const newProject = document.createElement('div');
    newProject.innerHTML = `<div class="item">
    <img src="assets/projetos/projeto${project.number}_1.jpg">
    <div class="details">
        <h3>${project.name}</h3>
        <div class="item-info">
            <div class="language">${project.language}</div>
        </div>
        <p>${project.description}</p>
        <div class="buttons">
            <a href="${project.git}">Saiba mais</a>
            <a href="${project.page}">Visitar página</a>
        </div>
    </div>
    </div>`
    const img = newProject.querySelector('img');
    img.addEventListener("mouseover", function(){
        mudarImagem(img, project.number);
    });
    img.addEventListener("mouseout", function(){
        voltarImagem(img, project.number);
    });
    projects.appendChild(newProject);
}

function initProjects(){
    fetch('projetos.json')
    .then(response => {
    if (!response.ok) {
        throw new Error('Erro ao carregar o arquivo JSON');
    }
        return response.json();
    })
    .then(jsonData => {
    jsonData.projects.forEach((project) => {
        preencherProjeto(project);
      });
    })
    .catch(error => {
    console.error('Erro:', error);
    });
}

initProjects();