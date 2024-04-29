var btnOpen = document.querySelector('.button__openSystem');
var system = document.querySelector('.layout1');

function toggleSystem() {
    system.classList.toggle('hide1');
}

btnOpen.addEventListener('click', toggleSystem)
system.addEventListener('click', function (e) {
    if (e.target == system) {
        toggleSystem();
    }
})

var btnComeBack = document.querySelector('.button-comeback');
var wallpaper = document.querySelector('.wallpaper');
var layout1 = document.querySelector('.layout1');

function goBackToWallpaper() {
    layout1.classList.add('hide1'); 
    wallpaper.style.display = 'block'; 
}

btnComeBack.addEventListener('click', goBackToWallpaper); 


var btnYes = document.querySelector('.button-yes');
var display = document.querySelector('.layout2');
var btnClose = document.querySelector('.button-close');

function toggleBtn(e) {
    display.classList.toggle('hide');
}

btnYes.addEventListener('click', toggleBtn)
btnClose.addEventListener('click', toggleBtn)
display.addEventListener('click', function (e) {
    if (e.target == e.currentTarget) {
        toggleBtn()
    }
})

var btnNo = document.querySelector('.button-no');
var modal = document.querySelector('.modal');
var iconClose = document.querySelector('.modal__header i');
var btnClose1 = document.querySelector('.button__footer');

function toggleModal() {
    modal.classList.toggle('showModal');
}

btnNo.addEventListener('click', toggleModal);
iconClose.addEventListener('click', toggleModal);
btnClose1.addEventListener('click', toggleModal);
modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        toggleModal();
    }
});

var btnWao = document.querySelector('.button-wao')
var modal1 = document.querySelector('.modal1')
var iconClose1 = document.querySelector('.modal1__header i')
var btnClose2 = document.querySelector('.button1__footer')

function toggleModal1() {
    modal1.classList.toggle('show1Modal');
}

btnWao.addEventListener('click', toggleModal1);
iconClose1.addEventListener('click', toggleModal1);
btnClose2.addEventListener('click', toggleModal1);
modal1.addEventListener('click', function (e) {
    if (e.target === modal1) {
        toggleModal1();
    }
});

var btnNote = document.querySelector('.button-note')
var modal2 = document.querySelector('.modal2')
var iconClose2 = document.querySelector('.modal2__header i')
var btnClose3 = document.querySelector('.button2__footer')

function toggleModal2() {
    modal2.classList.toggle('show2Modal');
}

btnNote.addEventListener('click', toggleModal2);
iconClose2.addEventListener('click', toggleModal2);
btnClose3.addEventListener('click', toggleModal2);
modal2.addEventListener('click', function (e) {
    if (e.target === modal2) {
        toggleModal2();
    }
});




