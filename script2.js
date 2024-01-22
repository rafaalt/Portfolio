function mudarImagem(imagem, num){
    imagem.src = `assets/projetos/projeto${num}_2.jpg`;
}

function voltarImagem(imagem, num){
    imagem.src = `assets/projetos/projeto${num}_1.jpg`;
}

function preencherProjeto(project){
    const projects = document.querySelector('.main-projects');
    const newProject = document.createElement('div');
    let appTxt = "";
    let pageLink = "";
    if(project.aplicativo){
        appTxt = `<p class="language Aplicativo">Aplicativo</p>`
    }
    if(project.page){
        pageLink = `<a href="${project.page}">Visitar página</a>`;
    }
    newProject.innerHTML = `<div class="main-project">
    <img src="assets/projetos/projeto${project.number}_1.jpg" alt="">
    <div class="info">
        <h3>${project.name}</h3>
        <div class="badge">
            <p class="language ${project.language}">${project.language}</p>
            ${appTxt}
        </div>
        <p class="txt">${project.description}</p>
        <div class="buttons">
            <a href="${project.git}" target="_blank">Saiba mais</a>
            ${pageLink}
        </div>
    </div>
    </div>`
    const img = newProject.querySelector('img');
    const bts = newProject.querySelector('.buttons');
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