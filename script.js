let button = document.querySelector(".form__button")

button.addEventListener("click", validation)

/* Inputs */
let inputName = document.querySelector('#form__card-name')
let cardNumber = document.querySelector('#form__card-number')
let cardDateMM = document.querySelector('#form__card-date--MM')
let cardDateYY = document.querySelector('#form__card-date--YY')
let cvc = document.querySelector('#form__card-CVC')

/* error boxes */
let errorName = document.querySelector('.error-box-name')
let errorCardNumber = document.querySelector('.error-box-cardNumber')
let errorDate = document.querySelector('.error-box-date')
let errorCVC = document.querySelector('.error-box-cvc')

inputName.addEventListener('input', function(e) {
    let  nameCard = document.querySelector('.card-front__name')
    nameCard.innerHTML = e.target.value 
})

cardNumber.addEventListener('input', function(e) {
   let numberCard = document.querySelector('.card-front__number')
    numberCard.innerHTML = e.target.value 
})

cardDateMM.addEventListener('input', function(e) {
    let mounthCard = document.querySelector('.card-front__mounth')
    mounthCard.innerHTML = e.target.value 
})

cardDateYY.addEventListener('input', function(e) {
    let yearCard = document.querySelector('.card-front__year')
    yearCard.innerHTML = e.target.value 
})

cvc.addEventListener('input', function(e) {
    let cvcCard = document.querySelector('.card-section__cvc')
    cvcCard.innerHTML = e.target.value 
})

/* Validation */
function validation() {
    if (inputName.value == "") {
        inputName.style.border = '1px solid hsl(0, 100%, 66%)'
        inputName.style.marginBottom = '0'
        errorName.innerHTML = "Can´t be blank"
    } 

    if (cardDateMM.value == "") {
        cardDateMM.style.border = '1px solid hsl(0, 100%, 66%)'
        cardDateMM.style.marginBottom = '0'
        errorDate.innerHTML = "Can´t be blank"
    } 

    if (cardDateYY.value == "") {
        cardDateYY.style.border = '1px solid hsl(0, 100%, 66%)'
        cardDateYY.style.marginBottom = '0'
        errorDate.innerHTML = "Can´t be blank"
    } 

    if (cvc.value == "") {
        cvc.style.border = '1px solid hsl(0, 100%, 66%)'
        cvc.style.marginBottom = '0'
        errorCVC.innerHTML = "Can´t be blank"
    } 
    
    if (cardNumber.value == "") {
        cardNumber.style.border = '1px solid hsl(0, 100%, 66%)'
        cardNumber.style.marginBottom = '0'
        
        errorCardNumber.innerHTML = "Can´t be blank"
        errorCardNumber.style.marginBottom = '0.5rem'
    } else if (!cardNumber.checkValidity()) {
        cardNumber.style.border = '1px solid hsl(0, 100%, 66%)'
        cardNumber.style.marginBottom = '0'
        errorCardNumber.style.marginBottom = '0.5rem'
        errorCardNumber.innerHTML = "Wrong format, numbers only"
    } else {
        thanksState()
    }
}

/*Thank you state*/ 
function thanksState() {
    let formSection = document.querySelector('.form-section')
    let thanksState = document.querySelector('.thanks-state')
    formSection.style.display = 'none'
    thanksState.style.display = 'block'
}

/* Continue button*/
let continueBTN = document.querySelector('.thanks-state__button')
    continueBTN.addEventListener('click', function() {
        window.location.reload()
    })






