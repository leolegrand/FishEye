class ImageMedia {
  constructor(media) {
    this.media = media
  }
  // template for a media which is an image
  imageTemplate() {
    let mediaContainer = document.getElementById('media-container')
    mediaContainer.innerHTML += `<article class="media">
            <a href="#" aria-label="ouvrir la lightbox" onClick="lightbox('${
              this.media.image
            }', '${this.media.title}', '${mediaOfCurrentPhotographer.indexOf(
      this.media
    )}')">
                <img src="./img/${
                  this.media.image
                }" class="media__content" alt="${this.media.alttext}">
            </a>
            <div class="media__body">
                <h2 class="media__title">${this.media.title}</h2>
                <div class="media__likes">
                    <p class="media__likes__count" id="likes-count-${
                      this.media.id
                    }">${this.media.likes}</p>
                    <img src="./img/icons/like-icon.png" alt="like" class="media__likes__img" onClick="addLike(${
                      this.media.id
                    }, ${this.media.likes})" >
                </div>
            </div>
        </article>
            `
  }
}
