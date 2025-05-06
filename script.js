document
  .getElementById('contactForm')
  .addEventListener('submit', function (event) {
    event.preventDefault()

    const firstName = document.getElementById('firstName').value.trim()
    const secondName = document.getElementById('secondName').value.trim()
    const email = document.getElementById('email').value.trim()
    const message = document.getElementById('message').value.trim()
    const formStatus = document.getElementById('formStatus')

    if (!firstName || !secondName || !email || !message) {
      formStatus.textContent = 'Please fill in all fields.'
      formStatus.style.color = 'red'
      return
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
    if (!email.match(emailPattern)) {
      formStatus.textContent = 'Please enter a valid email.'
      formStatus.style.color = 'red'
      return
    }

    formStatus.textContent = 'Form submitted successfully!'
    formStatus.style.color = 'green'

    document.getElementById('contactForm').reset()
  })
