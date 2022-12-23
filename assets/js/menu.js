function show_menu () {
    let ResponsiveMenu = document.querySelector('.responsive-nav')
    if(ResponsiveMenu.classList.contains('open')) {
        ResponsiveMenu.classList.remove('open')
        document.querySelector('.btn-icon').src = "img/menu/menu-sanduiche.svg"
    }else {
        ResponsiveMenu.classList.add('open')
        document.querySelector('.btn-icon').src = "img/menu/fechar.svg"
    }
}

