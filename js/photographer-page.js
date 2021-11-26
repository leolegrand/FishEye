let currentPhotographer, mediaOfCurrentPhotographer
let mediaContainer = document.getElementById('media-container')

// get string from URL into queryString
const queryString = window.location.search

// get the id parameter from queryString, corresponding to the ID of clicked photographer in index.html
const urlParams = new URLSearchParams(queryString)
const currentId = urlParams.get('id')

// MAIN FUNCTION
// fetch the data from the JSON
fetch('./json/fisheyeData.json')
  .then((response) => response.json())
  .then((data) => {
    // sort the data into two var
    photographersData = data.photographers
    mediaData = data.media

    //call those fonction to generate dynamically the website
    photographerContent()
    mediaContent()
  })

function photographerContent() {
  // filter photographersData to get the matching ID
  currentPhotographer = photographersData.filter(
    (photographer) => photographer.id.toString() === currentId
  )

  // apply the class Photographer to each element of currentPhotographer
  currentPhotographer.forEach((i) => {
    let photographer = new Photographer(i)

    // call the photographerPageTemplate's method to create dynamic HTML content about the current photographer
    photographer.photographerPageTemplate()
  })
}

function mediaContent() {
  // filter mediaData to get the medias that match with the current ID
  mediaOfCurrentPhotographer = mediaData.filter(
    (media) => media.photographerId.toString() === currentId
  )
  // apply the class MediasTemplate to the medias
  media = new Medias(mediaOfCurrentPhotographer)

  // call the method to sort image & video from medias
  media.sortingMedias()

  // call this method to generate a sticky footer with price and likes count
  media.stickyFooter()
}

// create an array (arr) and apply the MediasTemplate class to acces a sorting method
function sortByLikesOnClick() {
  let arr
  mediasSortedByLikes = new Medias(arr)
  // sort the array by number or likes
  mediasSortedByLikes.sortedByLikes()
  // clear the template
  mediasSortedByLikes.clearContainer()
  // generate a new template with the sorted array
  mediasSortedByLikes.sortingMedias()
}

// create an array (arr) and apply the MediasTemplate class to acces a sorting method
function sortByDateOnClick() {
  let arr
  mediasSortedByDate = new Medias(arr)
  // sort the array by date
  mediasSortedByDate.sortedByDate()
  // clear the template
  mediasSortedByDate.clearContainer()
  // generate a new template with the sorted array
  mediasSortedByDate.sortingMedias()
}

// create an array (arr) and apply the MediasTemplate class to acces a sorting method
function sortByNameOnClick() {
  let arr
  mediasSortedByName = new Medias(arr)
  // sort the array by name
  mediasSortedByName.sortedByName()
  // clear the template
  mediasSortedByName.clearContainer()
  // generate a new template with the sorted array
  mediasSortedByName.sortingMedias()
}

// increment like count in a media
// used with onClick DOM element
function addLike(mediaid, medialikes) {
  const newCount = medialikes + 1
  document.getElementById(`likes-count-${mediaid}`).innerHTML = newCount
}
