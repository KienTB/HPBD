var btnYes = document.querySelector('.button-yes')
var display = document.querySelector('.layout2')
var btnClose = document.querySelector('.button-close')

function toggleBtn(e) {
    display.classList.toggle('hide');
}

btnYes.addEventListener('click',toggleBtn)
btnClose.addEventListener('click',toggleBtn)
display.addEventListener('click',function(e) {
    if(e.target == e.currentTarget) {
        toggleBtn()
    }
})

var btnNo = document.querySelector('.button-no');
var modal = document.querySelector('.modal');
var iconClose = document.querySelector('.modal__header i');
var btnClose2 = document.querySelector('.button__footer');

function toggleModal() {
    modal.classList.toggle('showModal');
}

btnNo.addEventListener('click',toggleModal); 
iconClose.addEventListener('click',toggleModal); 
btnClose2.addEventListener('click',toggleModal); 
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        toggleModal(); 
    }
});



