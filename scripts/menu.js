function menuShow() {
    let menuMobile = document.querySelector('.menu')
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.menu-icon').src = "imagens/menu_white_36dp.svg"
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.menu-icon').src = "imagens/close_white_36dp.svg"
    }
}