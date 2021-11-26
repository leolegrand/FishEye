class VideoMedia {
  constructor(media) {
    this.media = media
  }
  // template for a media which is a video
  videoTemplate() {
    let mediaContainer = document.getElementById('media-container')
    mediaContainer.innerHTML += `<article class="media">
        <a onClick="lightbox('${this.media.video}', '${
      this.media.title
    }', '${mediaOfCurrentPhotographer.indexOf(this.media)}')">
            <video class="media__content" preload="metadata"> <source src="img/${
              this.media.video
            }#t=0.1" type="video/mp4"></video>
        </a>
        <div class="media__body">
            <h2 class="media__title">${this.media.title}</h2>
            <div class="media__likes">
                <p class="media__likes__count" id="likes-count-${
                  this.media.id
                }">${this.media.likes}</p>
                <img src="./img/icons/like-icon.png" alt="like" class="media__likes__img" onClick="addLike(${
                  this.media.id
                }, ${this.media.likes})">
            </div>
        </div>
    </article>
        `
  }
}
