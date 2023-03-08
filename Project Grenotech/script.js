const wrapper = document.querySelector( '.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.login');
const iconClose = document.querySelector('.close');
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');

registerLink.addEventListener('click', ()=> {
    wrapper.classList. add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList. remove('active');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList. add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList. remove('active-popup');
});

toggleBtn.addEventListener('click', ()=> {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'close'
        : 'menu'
});

// toggleBtn.onclick = function () {
//     dropDownMenu.classList.toggle('open')
//     const isOpen = dropDownMenu.classList.contains('open')

//     toggleBtnIcon.classList = isOpen
//     ? 'close'
//     : 'menu'
// }



