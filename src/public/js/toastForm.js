const btnBook = document.querySelector('#btn-book')
const form = document.querySelector('.book-form')


function callForm() {
   form.classList.add('visible')  
}

function removeForm(e) {
   const containerForm = e.target
   containerForm.classList.remove('visible')
}

btnBook.addEventListener('click', callForm)
form.addEventListener('click', removeForm)



