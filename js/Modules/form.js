// create a form, function is called on click
function createForm(a) {
  const form = document.createElement('div')
  form.classList.add('form')
  form.innerHTML = `<div class="form__container" role="dialog">
    <button class="form__close">Fermer</button>
    <h2>Contactez-moi ${a}</h2>
    <label>Nom</label>
    <input class="form__input" id="form-input-lastname">
    <label>Prénom</label>
    <input class="form__input" id="form-input-firstname">
    <label>E-mail</label>
    <input class="form__input" id="form-input-mail">
    <label>Votre message</label>
    <input class="form__input form__input--large" id="form-input-message">
    <div class="submit-container">
    <input type="submit" class="main-button form__submit" id="form-submit">
    </div>
</div>`
  document.body.appendChild(form)

  // close form on click
  let closeForm = document.querySelector('.form__close')
  closeForm.addEventListener('click', () => {
    document.body.removeChild(form)
  })

  // DOM input & submit elements
  let firstnameInput = document.getElementById('form-input-firstname')
  let lastnameInput = document.getElementById('form-input-lastname')
  let emailInput = document.getElementById('form-input-mail')
  let messageInput = document.getElementById('form-input-message')
  let submitForm = document.getElementById('form-submit')

  // get value on log for input elements
  submitForm.addEventListener('click', () => {
    console.log(firstnameInput.value)
    console.log(lastnameInput.value)
    console.log(emailInput.value)
    console.log(messageInput.value)
  })
}
