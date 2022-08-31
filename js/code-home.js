const btFechar = document.getElementById('btFechar')
const divModal = document.getElementById('divModal')

//Ao clicar no id "btFechar"
    
// Fecha o modal
btFechar.addEventListener('click', function(){
    //oculta o divModal - CSS display valor none (por javascript)
    divModal.style.display = 'none'
})