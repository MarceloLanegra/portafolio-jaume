const $form = document.querySelector('#contact')
// const $buttonMailto = document.querySelector('#mailto')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  // $buttonMailto.setAttribute('href',`mailto:mlanegra@megalabs.com.pe?subject=${form.get('name')} - Correo: ${form.get('mail')}&body=${form.get('message')}`)
  // $buttonMailto.click()
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      'Accept': 'application/json'
    }
  })
  if (response.ok) {
    this.reset()
    alert('Gracias por contactarme')
  }
}