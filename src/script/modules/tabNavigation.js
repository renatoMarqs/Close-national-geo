/* 
 - Navegação por Tabs:
É quando temos um item ou objeto se relacionando entre si,
fazendo conexão com os seus conteúdos.

Obs: o conteúdo tem que estar organizado na mesma ordem
*/

export default function initTab(){
    const tabAnimais = document.querySelectorAll("[data-tab= 'animais'] li")
    const tabDescription = document.querySelectorAll("[data-tab= 'description'] section")

    tabAnimais.forEach((itemli, indice)=>{
        itemli.addEventListener('click', ()=>{
            ativarTab(indice)
        })
    })
    
    function ativarTab(indice){
        tabDescription.forEach((itemSection)=>{
            itemSection.classList.remove("ativo")
        })
        const animation =tabDescription[indice].dataset.anima; /* ele pega o nome do "data-" */
        tabDescription[indice].classList.add("ativo", animation)
    }
    tabDescription[0].classList.add("ativo")
}