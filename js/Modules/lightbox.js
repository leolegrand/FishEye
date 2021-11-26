function lightbox(image, title, index) {
  //create a lightbox with the focus on the clicked element,
  //index is used to browse the array from a certain position
  const lightbox = document.createElement('div')
  lightbox.classList.add('lightbox')
  lightbox.innerHTML = `<button class="lightbox__close">Fermer</button>
        <button class="lightbox__next">Suivant</button>
        <button class="lightbox__prev">Précédent</button>
        <div class="lightbox__container">
          <div id="lightbox-media">
            <img src="./img/${image}" alt="">
            <h2>${title}</h2>
          </div>
          </div>`

  document.body.appendChild(lightbox)
  // next icon
  let nextLightbox = document.querySelector('.lightbox__next')
  // previous icon
  let prevLightbox = document.querySelector('.lightbox__prev')
  // content
  let displayedMedia = document.querySelector('#lightbox-media')
  // close icon
  let close = document.querySelector('.lightbox__close')

  function nextMedia() {
    //IF at the end of the array, start over from the beginning
    if (index == mediaOfCurrentPhotographer.length - 1) {
      index = 0
      // if the media is a video, apply this template
      if (mediaOfCurrentPhotographer[index].video != null) {
        displayedMedia.innerHTML = `<video class="media__content" preload="metadata" controls> <source src="img/${mediaOfCurrentPhotographer[index].video}#t=0.1" type="video/mp4"></video><h2>${mediaOfCurrentPhotographer[index].title}</h2>`
        // if the media is an image, apply this template
      } else if (mediaOfCurrentPhotographer[index].image != null) {
        displayedMedia.innerHTML = `<img src="./img/${mediaOfCurrentPhotographer[index].image}" alt="">
    <h2>${mediaOfCurrentPhotographer[index].title}</h2>`
      }
      // ELSE index++ to browse the medias
    } else {
      index++
      // if the media is a video, apply this template
      if (mediaOfCurrentPhotographer[index].video != null) {
        displayedMedia.innerHTML = `<video class="media__content" preload="metadata" controls> <source src="img/${mediaOfCurrentPhotographer[index].video}#t=0.1" type="video/mp4"></video><h2>${mediaOfCurrentPhotographer[index].title}</h2>`
        // if the media is an image, apply this template
      } else if (mediaOfCurrentPhotographer[index].image != null) {
        displayedMedia.innerHTML = `<img src="./img/${mediaOfCurrentPhotographer[index].image}" alt="">
    <h2>${mediaOfCurrentPhotographer[index].title}</h2>`
      }
    }
  }

  function prevMedia() {
    // ^ REVERSE LOGIC from nextLightbox ^
    if (index == 0) {
      index = mediaOfCurrentPhotographer.length - 1
      if (mediaOfCurrentPhotographer[index].video != null) {
        displayedMedia.innerHTML = `<video class="media__content" preload="metadata" controls> <source src="img/${mediaOfCurrentPhotographer[index].video}#t=0.1" type="video/mp4"></video><h2>${mediaOfCurrentPhotographer[index].title}</h2>`
      } else if (mediaOfCurrentPhotographer[index].image != null) {
        displayedMedia.innerHTML = `<img src="./img/${mediaOfCurrentPhotographer[index].image}" alt="">
    <h2>${mediaOfCurrentPhotographer[index].title}</h2>`
      }
    } else {
      index--
      if (mediaOfCurrentPhotographer[index].video != null) {
        displayedMedia.innerHTML = `<video class="media__content" preload="metadata" controls> <source src="img/${mediaOfCurrentPhotographer[index].video}#t=0.1" type="video/mp4"></video><h2>${mediaOfCurrentPhotographer[index].title}</h2>`
      } else if (mediaOfCurrentPhotographer[index].image != null) {
        displayedMedia.innerHTML = `<img src="./img/${mediaOfCurrentPhotographer[index].image}" alt="">
    <h2>${mediaOfCurrentPhotographer[index].title}</h2>`
      }
    }
  }

  //close the lightbox when the button is clicked
  function closeLightbox() {
    document.body.removeChild(lightbox)
  }

  // listen for click on lightbox interraction
  nextLightbox.addEventListener('click', nextMedia)
  prevLightbox.addEventListener('click', prevMedia)
  close.addEventListener('click', closeLightbox)

  // listen for keyboard event on lightbox interraction
  window.addEventListener('keydown', function (e) {
    e.preventDefault
    switch (e.key) {
      case 'ArrowLeft':
        prevMedia()
        break
      case 'ArrowRight':
        nextMedia()
        break
      case 'Escape':
        closeLightbox()
        break
    }
  })
}
