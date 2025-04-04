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
    }, 4300)
}
introHidden()
mainVisible()

// ------------------------------------------------------
let projects = [
    `<a target="_blank" href="./spotiClone/index.html"><i class="fa-brands fa-spotify"></i>Spoticlone</a>`,
    `<a target="_blank" href="./menInBlate/src/index.html"><i class="fa-solid fa-worm"></i>Men in blate</a>`,
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

// --------------------------- Btn------------------------------ //

const btnTop = document.querySelector('.arrow-top')

window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight * 3.5) {
        btnTop.classList.add('active')
    } else {
        btnTop.classList.remove('active')
    }
})

btnTop.addEventListener('click', () => {
    btnTop.classList.remove('active')
})

// ------------------------------------ email --------------------//

const emailBtn = document.querySelector('#emailBtn')
const email = document.querySelector('#email')

emailBtn.addEventListener('click', () => {
    email.classList.toggle('active')
    setTimeout(() => {
        email.classList.remove('active')
    }, 5000)
})
