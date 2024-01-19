function mudarImagem(imagem, num){
    imagem.src = `assets/projetos/projeto${num}_2.jpg`;
}

function voltarImagem(imagem, num){
    imagem.src = `assets/projetos/projeto${num}_1.jpg`;
}

function preencherProjeto(project){
    const projects = document.querySelector('.projects');
    const newProject = document.createElement('div');
    let pageLink = "";
    let appDiv = "";
    if(project.page){
        pageLink = `<a href="${project.page}">Visitar página</a>`;
    }
    if(project.aplicativo){
        appDiv = `<div class="language Aplicativo">Aplicativo</div>`
    }
    newProject.innerHTML = `<div class="item">
    <img src="assets/projetos/projeto${project.number}_1.jpg">
    <div class="details">
        <h2>${project.name}</h2>
        <div class="item-info">
            <div class="language ${project.language}">${project.language}</div>
            ${appDiv}
        </div>
        <p>${project.description}</p>
        <div class="buttons">
            <a href="${project.git}" target="_blank">Saiba mais</a>
            ${pageLink}
        </div>
    </div>
    </div>`
    const img = newProject.querySelector('img');
    img.addEventListener("mouseover", function(){
        img.style.opacity = 0; // Define a opacidade para 0
        setTimeout(() => {
            // Altera o src após um pequeno intervalo para permitir a transição
            mudarImagem(img, project.number); // Substitua pelo novo caminho da imagem que deseja exibir
            img.style.opacity = 1; // Define a opacidade de volta para 1
        }, 0); // Ajuste o valor conforme necessário para a duração da transição
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