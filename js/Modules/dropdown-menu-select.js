// DOM dropdown menu elements
let menuArrow = document.getElementById('menu-arrow')
let buttonDateContainer = document.getElementById('button-date')
let buttonTitleContainer = document.getElementById('button-title')

menuArrow.addEventListener('click', () => {
  if (menuArrow.classList.contains('rotate-180')) {
    // close the dropdown select-menu
    menuArrow.classList.remove('rotate-180')
    buttonDateContainer.innerHTML = ''
    buttonTitleContainer.innerHTML = ''
  } else {
    // open the dropdown select-menu
    menuArrow.classList.add('rotate-180')
    buttonDateContainer.innerHTML = `<button class="main-button--without-border-radius sort-by-menu--outline" onclick="sortByDateOnClick()">Date</button>`
    buttonTitleContainer.innerHTML = `<button class="main-button--without-border-radius sort-by-menu--outline" onclick="sortByNameOnClick()">Titre</button>`
  }
})
