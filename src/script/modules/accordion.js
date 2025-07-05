/* 
    - Áccordion List: é uma lista de itens empilhada verticalmente,
    que ao ser clicada, revela ou oculta um conteúdo associado a cada elemento dessa lista.

    # Usa-se o evente de click em cada item que vai ser relacionado,
    ao seu conteúdo.
*/

export default function initAccodion(){
    const accordionList = document.querySelectorAll("[data-accordion='accordion'] dt")
    accordionList[0].classList.toggle("ativo")
    accordionList[0].nextElementSibling.classList.toggle("ativo")
    
    /* accordionList.forEach(itemDt =>{
        ["click", "mouseenter"].forEach(itemEvent => {
            itemDt.addEventListener(itemEvent, accordion)
            })
        })
    - ou assim, mas aumenta o espaço entre os elementos para não bugarem
    */

    accordionList.forEach(itemDt => {
        itemDt.addEventListener("mousemove", ()=>itemDt.style.cursor = "pointer")
        itemDt.addEventListener("click", accordion)
    })

    function accordion(){
        this.classList.toggle('ativo')
        this.nextElementSibling.classList.toggle('ativo')
        //Método nextElementSibling: retorna o conteúdo html do próximo irmão
    }
    

}
