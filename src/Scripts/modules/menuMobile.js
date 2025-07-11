export default function initMenuMobile(){
    const buttonMobile = document.querySelector('[data-menu="mobile"]');
    const ulist = document.querySelector('[data-menu="list"]');

    buttonMobile.addEventListener('click', abrirMenuMobile)

    function abrirMenuMobile(){
        ulist.classList.toggle('ativo');
        buttonMobile.classList.toggle('ativo');
    }
}