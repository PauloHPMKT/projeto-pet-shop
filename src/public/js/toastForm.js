const btnteste = document.querySelector('#testebtn')
const divTeste = document.querySelector('.teste')


function callForm() {
   divTeste.classList.add('visible')  
}

function removeForm(e) {
   const containerForm = e.target
   containerForm.classList.remove('visible')
}

btnteste.addEventListener('click', callForm)
divTeste.addEventListener('click', removeForm)



