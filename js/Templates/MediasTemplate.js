class MediasTemplate {
  constructor(arr) {
    this.arr = arr
  }

  // sort videos & images separately and call a different method for each one
  sortingMedias() {
    this.arr.forEach((i) => {
      let media = new MediasFactory(i)

      if (media.constructor.name === 'ImageMedia') {
        media.imageTemplate()
      } else if (media.constructor.name === 'VideoMedia') {
        media.videoTemplate()
      } else {
        console.log("Medias's type unknown")
      }
    })
  }

  // get an array sorted by date
  sortedByDate() {
    this.arr = mediaOfCurrentPhotographer.sort((a, b) =>
      a.date.localeCompare(b.date)
    )
  }

  // get an array sorted by name
  sortedByName() {
    this.arr = mediaOfCurrentPhotographer.sort((a, b) =>
      a.title.localeCompare(b.title)
    )
  }

  // get an array sorted by number of likes
  sortedByLikes() {
    this.arr = mediaOfCurrentPhotographer.sort((a, b) => b.likes - a.likes)
  }

  // clear the container that receive the medias
  clearContainer() {
    let mediaContainer = document.getElementById('media-container')
    mediaContainer.innerHTML = ''
  }

  // create a sticky footer on photographer-page.html in which the total number of likes
  stickyFooter() {
    let totalLikes = 0
    for (let i = 0; i < mediaOfCurrentPhotographer.length; i++) {
      totalLikes += mediaOfCurrentPhotographer[i].likes
    }

    let footer = document.createElement('footer')
    footer.classList.add('photographer-page-footer')
    footer.innerHTML = `<p class="photographer-page-footer-likes">${totalLikes}
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 36 36"><path d="M33 7.64c-1.34-2.75-5.2-5-9.69-3.69A9.87 9.87 0 0 0 18 7.72a9.87 9.87 0 0 0-5.31-3.77C8.19 2.66 4.34 4.89 3 7.64c-1.88 3.85-1.1 8.18 2.32 12.87C8 24.18 11.83 27.9 17.39 32.22a1 1 0 0 0 1.23 0c5.55-4.31 9.39-8 12.07-11.71c3.41-4.69 4.19-9.02 2.31-12.87z" class="clr-i-solid clr-i-solid-path-1" fill="currentColor"/></svg></p>
    
    <p>${currentPhotographer[0].price}€ / jour</p>`
    document.body.appendChild(footer)
  }
}
