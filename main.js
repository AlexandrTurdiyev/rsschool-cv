document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM загружен');
    console.log('Кнопка бургера:', getBurgerBtn());

    if (getBurgerBtn() !== false) {
        console.log('Кнопка бургер-меню найдена...');
        const burgerBtn = getBurgerBtn();
        burgerBtnListener(burgerBtn);

    } else {
        console.log('Кнопка бургер-меню НЕ найдена...');
    }

});

window.addEventListener('load', function() {
    console.log('Все ресурсы загружены');
});

function getBurgerBtn () { // Получить кнопку бургер-меню
    const burgerBtn = document.querySelector('.burger__icon-link');
    return burgerBtn !== null ? burgerBtn : false; // Если кнопка получена, то вернуть её иначе вернуть false
}

function burgerBtnListener (btn) {
    btn.addEventListener('click', (event) => {
        event.preventDefault()
        console.log('Кнопка бургер-меню нажата');
        burgerToggle();
    })
}

function burgerToggle () {
    const burgerIcon = document.querySelector('.burger__icon');
    burgerIcon.classList.toggle('burger--open');
    burgerListVisibleToggle();
}

function burgerListVisibleToggle() {
    const burgerList = document.querySelector('.burger__list');
    burgerList.classList.toggle('burger-list--visible');
}