const toolbarBtns = document.querySelectorAll('.button')

toolbarBtns.forEach((toolbarBtn) => {
    toolbarBtn.addEventListener('click', () => {
        toolbarBtns.forEach(function(btn) {
            btn.classList.remove('active')
        })
        toolbarBtn.classList.add('active')
        console.log('click')
    })
})

const accountPopup = document.querySelector('.account')
const accountSvg = document.querySelector('.account-svg')
let popup = null
accountPopup.addEventListener('click', (e) => {
    e.preventDefault()
    if (popup) {
        popup.remove()
        popup = null
        accountSvg.style.transform = 'rotate(0deg)'
    } else {
        popup = document.createElement('div')
        popup.classList.add('popup')
        accountSvg.style.transform = 'rotate(180deg)'
        popup.innerHTML = `
            <div class="popup-container">
                <a href="#">Menu 1</a>
                <a href="#">Menu 2</a>
                <a href="#">Menu 3</a>
            </div>
        `
        accountPopup.appendChild(popup)
        console.log('popup')
    }
})
