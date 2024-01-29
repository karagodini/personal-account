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


const additionalBtn = document.querySelector('.additional-block-btn')

additionalBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.classList.contains('additional-button')) {
        const additionalButtons = document.querySelectorAll('.additional-button')
        const additionalContent = document.querySelectorAll('.additional-content')
        additionalButtons.forEach((additionalButton, index) => {
            if (additionalButton === e.target) {
                additionalButton.classList.add('active')
                additionalContent[index].classList.add('active')
            } else {
                additionalButton.classList.remove('active')
                additionalContent[index].classList.remove('active')
            }
        })
    }
})