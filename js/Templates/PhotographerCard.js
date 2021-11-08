class PhotographerCard {
  constructor(photographer) {
    this.photographer = photographer
  }

  createPhotographerCard() {
    let cardContainer = document.getElementById('profileContainer')
    cardContainer.innerHTML += `
        <article class="photographer" id="${this.photographer.id}">
          <a href="photographer-page.html?id=${this.photographer.id}">
            <img class="photographer__profile-img" src="./img/${this.photographer.portrait}">
            <h2 class="photographer__name">${this.photographer.name}</h2>
          </a>
          <p class="photographer__location">${this.photographer.city}, ${this.photographer.country}</p>
          <p class="photographer__bio">${this.photographer.tagline}</p>
          <p class="photographer__pricing">${this.photographer.price}€/jour</p>
          <nav class="photographer__hashtag-list">
            <ul class="profileHashtagContainer" id="hash-container-${this.photographer.id}">
            </ul>
          </nav>
        </article>
      `
    let cardTagsContainer = document.getElementById(
      `hash-container-${this.photographer.id}`
    )
    this.photographer.tags.forEach((tag) => {
      cardTagsContainer.innerHTML += `<li><a class="hashtag" id="${this.photographer.id}">#${tag}</a></li>`
    })
  }
}
