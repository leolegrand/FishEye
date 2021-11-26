class Photographer {
  constructor(photographer) {
    this.photographer = photographer
  }

  // template for photographer's data on index.html
  createPhotographerCard() {
    // index.html HEADER
    let cardContainer = document.getElementById('profileContainer')
    cardContainer.innerHTML += `
        <article class="photographer" id="${this.photographer.id}">
          <a href="photographer-page.html?id=${this.photographer.id}" aria-label="${this.photographer.name}">
            <img class="photographer__profile-img" src="./img/${this.photographer.portrait}" alt="${this.photographer.portraitalttext}">
            <h2 class="photographer__name">${this.photographer.name}</h2>
          </a>
          <p class="photographer__location" >${this.photographer.city}, ${this.photographer.country}</p>
          <p class="photographer__bio" >${this.photographer.tagline}</p>
          <p class="photographer__pricing">${this.photographer.price}€/jour</p>
          <div class="photographer__hashtag-list">
            <ul class="profileHashtagContainer" id="hash-container-${this.photographer.id}">
            </ul>
          </div>
        </article>
      `
    let cardTagsContainer = document.getElementById(
      `hash-container-${this.photographer.id}`
    )
    this.photographer.tags.forEach((tag) => {
      cardTagsContainer.innerHTML += `<li><a class="hashtag" aria-label="tag ${tag}">#${tag}</a></li>`
    })
  }

  // Template for photographer's data on photographer-page.html
  photographerPageTemplate() {
    // photographer page BANNER.
    let photographerPageBanner = document.getElementById(
      'photographer-page-banner'
    )
    photographerPageBanner.innerHTML = `
        <div class="photographer-page-info-container" aria-label="info sur le photographe" role="banner ">
            <h1 class="photographer-page-banner__name">${this.photographer.name}</h1>
            <p class="photographer-page-banner__location">${this.photographer.city}, ${this.photographer.country}</p>
            <p class="photographer-page-banner__bio">${this.photographer.tagline}</p>
            <button class="main-button--photographer-page main-button" onclick="createForm('${this.photographer.name}')">Contactez-moi</button>
            <nav>
                <ul id="photographer-page-tags">
                </ul>
            </nav>
        </div>
    
    <img class="photographer-page-banner__img" src="./img/${this.photographer.portrait}" alt="${this.photographer.portraitalttext}">`

    let bannerTagsContainer = document.getElementById(`photographer-page-tags`)
    this.photographer.tags.forEach((tag) => {
      bannerTagsContainer.innerHTML += `<li><a class="hashtag">#${tag}</a></li>`
    })

    //photographer page STICKY CONTACT BUTTON
    let contactButton = document.createElement('div')
    contactButton.innerHTML = `<button class="form__contact-me" onclick="createForm('${this.photographer.name}')">Contactez-moi</button>
    `
    document.body.appendChild(contactButton)
  }
}
