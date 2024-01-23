function colocarNomeConhecimento(){
    const itens = document.getElementsByClassName('sobre-item');
    for(let i = 0;i<10;i++){
        itens[i].addEventListener("mouseover", function(){
            const img = itens[i].querySelector('img');
            let txt = img.getAttribute("alt");
            let p = itens[i].querySelector('p');
            p.innerText = txt;
        });
        itens[i].addEventListener("mouseout", function(){
            let p = itens[i].querySelector('p');
            p.innerText = "";
        });
    }
}
colocarNomeConhecimento();