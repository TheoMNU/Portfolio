let main = document.querySelector('main')
let intro = document.querySelector('#intro')

function introHidden() {
    setTimeout(() => {
        intro.remove()
    }, 4100)
}
function mainVisible() {
    setTimeout(() => {
        main.classList.remove('hide')
        console.log('yo')
    }, 4300)
}
introHidden()
mainVisible()

// ------------------------------------------------------
