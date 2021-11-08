let photographersData, filteredPhotographersData

let cardContainer = document.getElementById('profileContainer')

fetch('./json/fisheyeData.json')
  .then((response) => response.json())
  .then((data) => {
    photographersData = data.photographers
    main()
  })

function main() {
  photographersData.forEach((i) => {
    let photographer = new PhotographerCard(i)
    photographer.createPhotographerCard()
  })
}

function getIdOnClick(tag) {
  filteredPhotographersData = photographersData.filter((i) =>
    i.tags.includes(tag.id)
  )
  cardContainer.innerHTML = ''
  filteredPhotographersData.forEach((i) => {
    let photographer = new PhotographerCard(i)
    photographer.createPhotographerCard()
  })
}
