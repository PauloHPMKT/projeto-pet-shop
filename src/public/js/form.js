const dogForm = document.querySelector('form.dog')
const labelDog = document.querySelector('label.dog')
const labelCat = document.querySelector('label.cat')


labelCat.onclick = () => {
    dogForm.style.marginLeft = '-50%'
}

labelDog.onclick = () => {
    dogForm.style.marginLeft = '0'
}