async function fetchPhotographersData() {
  const response = await fetch('./json/fisheyeData.json')
  const data = await response.json()
  const photographersArray = data.photographers
  photographerTemplate(photographersArray)
}

function photographerTemplate(newProfile) {
  let profileContainer = document.getElementById('profileContainer')
  let profileHashtagContainer = document.getElementsByClassName(
    'profileHashtagContainer'
  )
  for (i = 0; i < newProfile.length; i++) {
    profileContainer.innerHTML += `
      <article class="photographer" id="${newProfile[i].id}">
        <a href="photographer-page.html?id=${newProfile[i].id}&">
          <img class="photographer__profile-img" src="./img/${newProfile[i].portrait}">
          <h2 class="photographer__name">${newProfile[i].name}</h2>
        </a>
        <p class="photographer__location">${newProfile[i].city}, ${newProfile[i].country}</p>
        <p class="photographer__bio">${newProfile[i].tagline}</p>
        <p class="photographer__pricing">${newProfile[i].price}€/jour</p>
        <nav class="photographer__hashtag-list">
          <ul class="profileHashtagContainer">`
    for (t = 0; t < newProfile[i].tags.length; t++) {
      profileHashtagContainer[
        i
      ].innerHTML += `<li><a class="hashtag" id="${newProfile[i].id}">#${newProfile[i].tags[t]}</a></li>`
    }
    ;`</ul>
        </nav>
      </article>
    `
  }
}

fetchPhotographersData()
