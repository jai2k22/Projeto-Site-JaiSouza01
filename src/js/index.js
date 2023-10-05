//console.log(document.getElementById("chopper")); 
const botoes = document.querySelectorAll(".botao");
const projetos = document.querySelectorAll(".projetos");
//console.log(botoes);

botoes.forEach((botao, indice) =>{
    botao.addEventListener("click", () => {
        
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        
        botaoSelecionado.classList.remove("selecionado");
        
        botao.classList.add("selecionado"); 
        
        const projetosSelecionado = document.querySelector(".projetos.selecionado");

        projetosSelecionado.classList.remove("selecionado");

        projetos[indice].classList.add("selecionado");

        

        
    });
});
