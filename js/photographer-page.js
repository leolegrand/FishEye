// get string from URL into queryString
const queryString = window.location.search
console.log({ queryString })

// get the id parameter from queryString
const urlParams = new URLSearchParams(queryString)
const currentId = urlParams.get('id')

console.log({ currentId })

async function fetchFishEyeData() {
  // fetch the data & stock the response in a variable
  const response = await fetch('./json/fisheyeData.json')
  // when the response is received, convert it to json then stock it into a new var
  let fisheyeData = await response.json()
  const photographersData = fisheyeData.photographers
  const mediaData = fisheyeData.media

  // get the data from the photographer that have the same id as the page does
  let currentPhotographer = photographersData.filter(
    (photographer) => photographer.id == currentId
  )
  console.log(currentPhotographer[0])

  let filteredMedia = mediaData.filter(
    (media) => media.photographerId == currentId
  )
  console.log(filteredMedia)

  let videoFromMedia = filteredMedia.filter((media) => media.video != null)
  console.log(videoFromMedia)

  let imageFromMedia = filteredMedia.filter((media) => media.image != null)
  console.log(imageFromMedia)

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

  for (i = 0; i < imageFromMedia.length; i++) {
    mediaContainer.innerHTML += `<article class="media">
        <a>
            <img src="./img/${imageFromMedia[i].image}" class="media__content">
        </a>
        <div class="media__body">
            <h2 class="media__title">${imageFromMedia[i].title}</h2>
            <div class="media__likes">
                <p class="media__likes__count">${imageFromMedia[i].likes}</p>
                <img src="./img/icons/like-icon.png" class="media__likes__img">
            </div>
        </div>
    </article>
        
        `
  }
  for (i = 0; i < videoFromMedia.length; i++) {
    mediaContainer.innerHTML += `<article class="media">
        <a>
            <video width="350" height="300" preload="metadata" controls> <source src="img/${videoFromMedia[i].video}#t=0.1" type="video/mp4"></video>
        </a>
        <div class="media__body">
            <h2 class="media__title">${videoFromMedia[i].title}</h2>
            <div class="media__likes">
                <p class="media__likes__count">${videoFromMedia[i].likes}</p>
                <img src="./img/icons/like-icon.png" class="media__likes__img">
            </div>
        </div>
    </article>
        
        `
  }
}

fetchFishEyeData()
