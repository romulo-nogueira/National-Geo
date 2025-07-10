export default function initDropMenu(){
    const dropMenu = document.querySelectorAll("[data-dropMenu='menuDrop']");
    const clickFora = document.querySelector('body')

    dropMenu.forEach(itemLi => {
        ["click", "touchstart"].forEach(itemEvents => {
            itemLi.addEventListener(itemEvents, clickDrop);
        })
    })

    function clickDrop(event){
        event.preventDefault();
        this.classList.toggle('ativo');

        clickFora.addEventListener("mousedown", () =>{
            this.classList.remove('ativo');
        })
    }
}