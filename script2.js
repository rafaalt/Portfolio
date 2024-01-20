function mudarImagem(imagem, num){
    imagem.src = `assets/projetos/projeto${num}_2.jpg`;
}

function voltarImagem(imagem, num){
    imagem.src = `assets/projetos/projeto${num}_1.jpg`;
}

function preencherProjeto(project){
    const projects = document.querySelector('.main-projects');
    const newProject = document.createElement('div');
    newProject.innerHTML = `<div class="main-project">
    <img src="assets/projetos/projeto${project.number}_1.jpg" alt="">
    <div class="info">
        <h3>${project.name}</h3>
        <p class="language ${project.language}">${project.language}</p>
        <p class="txt">${project.description}</p>
    </div>
    </div>`
    const img = newProject.querySelector('img');
    newProject.addEventListener("mouseover", function(){
        mudarImagem(img, project.number);
    });
    newProject.addEventListener("mouseout", function(){
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
    for(let i = 0;i<3;i++){
        preencherProjeto(jsonData.projects[i]);
    }})
    .catch(error => {
    console.error('Erro:', error);
    });
}

initProjects();