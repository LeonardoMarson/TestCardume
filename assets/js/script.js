const input = document.querySelectorAll(".input-field");
const label = document.querySelectorAll(".label-field");

// Variáveis para salvar o atual input selecionado
let idInput;
let inputValue;
let inputField;

// Variáveis para salvar o último input clicado e label correspondente
let lastLabel;
let lastInput;

// Seleciona os valores utlizados do input clicado
Array.from(input).forEach(e => e.addEventListener('click', () => {
    idInput = e.id;
    inputValue = e.value;
    inputField = e;
}));

// Função para verificar o conteúdo do último input que foi selecionado
function checkLastField(e){
    return e.value;
}

/* 
    "Pega" os cliques que são realizados na tela inteira, 
    para adicionar ou remover a classe ('active') que irá no label, modificando sua posição na tela
*/
window.addEventListener('click', () => {
    if(lastInput != null){
        if(checkLastField(lastInput)){
            lastLabel= null;
        }
    }

    // Se o último input não conter nenhum conteúdo, o label correspondente volta para seu lugar de origem
    if(lastLabel != null){
        lastLabel.classList.remove('active');
    }

    // "Pega" o label correspondente ao input atual selecionado e adiciona a classe ('active')
    if(idInput != null){
        Array.from(label).forEach(e => {
            e.getAttribute('for') == idInput ? correspondingLabel = e : "Element not found!";
        });

        if (event.target.id == idInput){
            correspondingLabel.classList.add('active');
            lastLabel = correspondingLabel;
            lastInput = inputField;
        }
    }
});

// window.addEventListener("scroll", getScrollY);
// function getScrollY(){
//     let scrollY = window.scrollY;
    
//     if(scrollY > 40){
//         header.style.cssText = "height: 15rem; position: fixed; transition: height 0.1s linear; z-index: 1;";
//     }
//     else {
//         header.style.cssText = "height: 21rem; transition: height 0.3s ease;";
//     }
// }


