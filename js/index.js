let photographersData, filteredPhotographersData
let cardContainer = document.getElementById('profileContainer')

// fetch data from JSON
fetch('./json/fisheyeData.json')
  .then((response) => response.json())
  .then((data) => {
    photographersData = data.photographers
    main()
  })

// apply the Photographer class to each photographer then call a method that create DOM element
function main() {
  photographersData.forEach((i) => {
    let photographer = new Photographer(i)
    photographer.createPhotographerCard()
  })
}

// on click function that filter the photographer by the ID then clear & recreate DOM with newly filtered array
function getIdOnClick(tag) {
  filteredPhotographersData = photographersData.filter((i) =>
    i.tags.includes(tag.id)
  )
  cardContainer.innerHTML = ''
  filteredPhotographersData.forEach((i) => {
    let photographer = new Photographer(i)
    photographer.createPhotographerCard()
  })
}
