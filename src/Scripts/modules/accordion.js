/*
É uma lista de itens empilhada verticalmente que ao ser clicada revela ou oculta o conteudo associado a cada
elemento desta lista.

# Usa-se o evento click em cada item que vai ser relacionado, ao seu conteudo.

*/

export default function initAccordion(){
    const accordionList = document.querySelectorAll("[data-accordion='accordion'] dt ")

    accordionList.forEach(itremDt =>{
        /* ["mouseout", "click"].forEach(itemEvent =>{
            itremDt.addEventListener(itemEvent, accordion)
        }) */
        itremDt.addEventListener("mousemove", ()=>itremDt.style.cursor = "pointer")
        itremDt.addEventListener("click", accordion )
        
    })
    function accordion(){
        /* this.style.cursor="pointer"; */
        this.classList.toggle('ativo');
        this.nextElementSibling.classList.toggle('ativo');
    }

        accordionList[0].classList.toggle('ativo');
        accordionList[0].nextElementSibling.classList.toggle('ativo');
}