let button = document.querySelector(".form__button")

button.addEventListener("click", validation)

let inputName = document.querySelector('#form__card-name')
let cardNumber = document.querySelector('#form__card-number')
let cardDateMM = document.querySelector('#form__card-date--MM')
let cardDateYY = document.querySelector('#form__card-date--YY')
let cvc = document.querySelector('#form__card-CVC')


let errorName = document.querySelector('.error-box-name')
let errorCardNumer = document.querySelector('.error-box-cardNumber')
let errorDate = document.querySelector('.error-box-date')
let errorCVC = document.querySelector('.error-box-cvc')

function validation() {
    if (inputName.value == "") {
        inputName.style.border = '1px solid hsl(0, 100%, 66%)'
        errorName.innerHTML = "Can´t be blank"
    }

    if (cardNumber.value == "") {
        cardNumber.style.border = '1px solid hsl(0, 100%, 66%)'
        errorCardNumer.innerHTML = "Can´t be blank"
    } else if (!cardNumber.checkValidity()) {
        errorCardNumer.innerHTML = "Wrong format, numbers only"
    }

    if (cardDateMM.value == "") {
        cardDateMM.style.border = '1px solid hsl(0, 100%, 66%)'
        errorDate.innerHTML = "Can´t be blank"
    }

    if (cardDateYY.value == "") {
        cardDateYY.style.border = '1px solid hsl(0, 100%, 66%)'
        errorDate.innerHTML = "Can´t be blank"
    }

    if (cvc.value == "") {
        cvc.style.border = '1px solid hsl(0, 100%, 66%)'
        errorCVC.innerHTML = "Can´t be blank"
    } else {
        thanksState()
    }
}

function thanksState() {
    let thanksState = document.querySelector('.thanks-state')
    let formSection = document.querySelector('.form-section')

    formSection.style.display = 'none'
    thanksState.style.display = 'block'
}





