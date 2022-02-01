$(document).ready(() => {
    $('header>div').click(() => {
        $('header>div>div').toggleClass('show')
        $('header>div').toggleClass('close_icon_menu')
    })

})
