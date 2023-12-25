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
let projects = [
    `<a href="../../"><i class="fa-brands fa-spotify"></i>Spoticlone</a>`,
    `<a href="#"><i class="fa-solid fa-worm"></i>Men in blate</a>`,
]

const realList = document.querySelector('#realList')

function projectList() {
    const realLink = document.createElement('li')
    realList.append(realLink)

    for (let i = 0; i <= projects.length - 1; i++) {
        realLink.innerHTML += `
        ${projects[i]}
		`
    }
}

projectList()
