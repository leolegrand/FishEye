// DOM dropdown menu elements
let menuArrow = document.getElementById('menu-arrow')
let buttonDateContainer = document.getElementById('button-date')
let buttonTitleContainer = document.getElementById('button-title')

function dropdownmenu() {
  if (menuArrow.classList.contains('rotate-180')) {
    // close the dropdown select-menu
    menuArrow.classList.remove('rotate-180')
    menuArrow.setAttribute('aria-expanded', 'false')
    buttonDateContainer.innerHTML = ''
    buttonTitleContainer.innerHTML = ''
  } else {
    // open the dropdown select-menu
    menuArrow.classList.add('rotate-180')
    menuArrow.setAttribute('aria-expanded', 'true')
    buttonDateContainer.innerHTML = `<button class="main-button--without-border-radius sort-by-menu--outline" aria-label="trier par date" onclick="sortByDateOnClick()">Date</button>`
    buttonTitleContainer.innerHTML = `<button class="main-button--without-border-radius sort-by-menu--outline" aria-label="trier par ordre alphabétique" onclick="sortByNameOnClick()">Titre</button>`
  }
}

menuArrow.addEventListener('click', dropdownmenu)
menuArrow.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    dropdownmenu()
  }
})
