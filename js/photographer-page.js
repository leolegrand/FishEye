// get string from URL into queryString
const queryString = window.location.search
console.log({ queryString })

// get the id parameter from queryString
const urlParams = new URLSearchParams(queryString)
const id = urlParams.get('id')

console.log({ id })

async function fetchFishEyeData() {
  // fetch the data & stock the response in a variable
  const response = await fetch('./json/fisheyeData.json')
  // when the response is received, convert it to json then stock it into a new var
  let fisheyeData = await response.json()
  const photographersData = fisheyeData.photographers
  const mediaData = fisheyeData.media

  // get the data from the photographer that have the same id as the page does
  let currentPhotographer = photographersData.filter(
    (photographer) => photographer.id == id
  )
  console.log(currentPhotographer[0])

  let filteredMedia = mediaData.filter((media) => media.photographerId == id)
  console.log(filteredMedia)

  let photographerPageBanner = document.getElementById(
    'photographer-page-banner'
  )
  let photographerTags = document.getElementById('photographer-page-tags')
  // create a template for the banner of photographer-page
  photographerPageBanner.innerHTML = `
            <div class="photographer-page-info-container">
                <h1 class="photographer-page-banner__name">${currentPhotographer[0].name}</h1>
                <p class="photographer-page-banner__location">${currentPhotographer[0].city}, ${currentPhotographer[0].country}</p>
                <p class="photographer-page-banner__bio">${currentPhotographer[0].tagline}</p>
                <nav>
                    <ul id="photographer-page-tags">
                    <li class="hashtag">#${currentPhotographer[0].tags}</li>
                    </ul>
                </nav>
                <button class="main-button main-button--photographer-page">Contactez-moi</button>
            </div>

        <img class="photographer-page-banner__img" src="./img/${currentPhotographer[0].portrait}" alt="">`

  let mediaContainer = document.getElementById('media-container')

  for (i = 0; i < filteredMedia.length; i++) {
    mediaContainer.innerHTML += `<article class="media">
        <a>
            <img src="./img/${filteredMedia[i].image}" class="media__content">
        </a>
        <div class="media__body">
            <h2 class="media__title">${filteredMedia[i].title}</h2>
            <div class="media__likes">
                <p class="media__likes__count">${filteredMedia[i].likes}</p>
                <img src="./img/icons/like-icon.png" class="media__likes__img">
            </div>
        </div>
    </article>
        
        `
  }
}

fetchFishEyeData()
