//menu toolbabar
const toolbarBtns = document.querySelectorAll('.button')
toolbarBtns.forEach((toolbarBtn) => {
    toolbarBtn.addEventListener('click', () => {
        toolbarBtns.forEach(function(btn) {
            btn.classList.remove('active')
        })
        toolbarBtn.classList.add('active')
    })
})
//end menu toolbabar

//mobile toolbar
    const mobileMenuOpen = document.querySelector('.mobile-menu-open')
    const toolbar = document.querySelector('.toolbar')
    const mobileContainer = document.querySelector('.container')
    const mobileMenuClose = document.querySelector('.mobile-menu-close')
    mobileMenuOpen.addEventListener('click', (e) => {
        toolbar.classList.add('toolbar-mobile')
        mobileContainer.style.opacity = '0.3'
        mobileMenuClose.style.display = 'block'
    })
    mobileMenuClose.addEventListener('click', (e) => {
        e.preventDefault()
        toolbar.classList.remove('toolbar-mobile')
        mobileContainer.style.opacity = '1'
        mobileMenuClose.style.display = 'none'
    })

//end mobile toolbar

//popup account
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
    }
})
//end popup account

//menu content
const menuContent = document.querySelector('.menu')
menuContent.addEventListener('click', (e) => {
    e.preventDefault()
    if (e.target.classList.contains('menuContentButton')) {
        const menuContentButtons = document.querySelectorAll('.menuContentButton')
        const content = document.querySelectorAll('.content-container')
        menuContentButtons.forEach((menuContentButton, index) => {
            if (menuContentButton === e.target) {
                menuContentButton.classList.add('active')
                content[index].classList.add('active-content')
            } else {
                menuContentButton.classList.remove('active')
                content[index].classList.remove('active-content')
            }
        })
    }
})
//end menu content

//tabs дополнительная информация
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
//end tabs дополнительная информация