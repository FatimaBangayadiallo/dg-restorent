const modalMenu = document.querySelector('.modal-overlay-menu');
const btnMenu = document.querySelector('.btn-menu');
const btnClose = document.querySelector('.starter-btn-close');
console.log(btnClose);

btnMenu.addEventListener('click', function(){
    modalMenu.classList.toggle('show-modal');
})

btnClose.addEventListener('click', function(){
     modalMenu.classList.remove('show-modal');
})

const btnContact = document.querySelector('.btn-contact');
// console.log(btnContact);

const modalContact = document.querySelector('.modal-overlay-contact');
// console.log(modalContact);

const btnContactClose = document.querySelector('.btn-contact-close');
//  console.log(btnContactClose);

btnContact.addEventListener('click', function(){
     const result = modalContact.classList.contains('show-contact');
     if(result){
        modalContact.classList.remove('show-contact');
     }else{
        modalContact.classList.add('show-contact');
     }
     console.log('hello');
})

btnContactClose.addEventListener('click', function(){
    modalContact.classList.remove('show-contact');
})