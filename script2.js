let form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
    /* Tirar comportamento padrão do browser */
    e.preventDefault();

    validation()
})

/* Inputs */
let inputName = document.querySelector('#form__card-name')
let cardNumber = document.querySelector('#form__card-number')
let cardDateMM = document.querySelector('#form__card-date--MM')
let cardDateYY = document.querySelector('#form__card-date--YY')
let cvc = document.querySelector('#form__card-CVC')

/* Event listener for card input */

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



/* Function for validation input */
function validation() {
    nameVali()
    numberCardVali()
    DateMMVali()
    DateYYVali()
    cvcVali()
    finalValidation()
}

/* Validation each input */
function nameVali() {
    let errorName = document.querySelector('.error-box-name')
    if (inputName.value === "") {
        /*Adicionar classe error */
        inputName.parentElement.classList.add("error")
        /* adicionar mensagem de erro*/
        errorName.innerHTML = "Can't be blank"
    } else {
        inputName.parentElement.classList.remove("error")
        errorName.innerHTML = ""
        return true
    }
}

function numberCardVali() {
    let errorCardNumber = document.querySelector('.error-box-cardNumber')

    if (cardNumber.value === "") {
        /*Adicionar classe error */
        cardNumber.parentElement.classList.add("error")
        /* adicionar mensagem de erro*/
        errorCardNumber.innerHTML = "Can't be blank"
    } else {
        cardNumber.parentElement.classList.remove("error")
        errorCardNumber.innerHTML = ""
        return true
    }
    
    /* Pattern validation */
    if (cardNumber.validity.patternMismatch === true) {
        cardNumber.parentElement.classList.add("error")
        errorCardNumber.innerHTML = "Wrong format, numbers only"
    } else {
        return true
    }
}

function DateMMVali() {
    let errorDate = document.querySelector('.error-box-date')

    if (cardDateMM.value === "") {
        /*Adicionar classe error */
        cardDateMM.parentElement.classList.add("error")
        /* adicionar mensagem de erro*/
        errorDate.innerHTML = "Can't be blank"
    } else {
        cardDateMM.parentElement.classList.remove("error")
        errorDate.innerHTML = ""
        return true
    }

    /* Pattern validation */
    if (cardDateMM.validity.patternMismatch === true) {
        cardDateMM.parentElement.classList.add("error")
        errorDate.innerHTML = "Wrong format, numbers only"
    } else {
        return true
    }
}

function DateYYVali() {
    let errorDate = document.querySelector('.error-box-date')

    if (cardDateYY.value === "") {
        /*Adicionar classe error */
        cardDateYY.parentElement.classList.add("error")
        /* adicionar mensagem de erro*/
        errorDate.innerHTML = "Can't be blank"
    } else {
        cardDateYY.parentElement.classList.remove("error")
        errorDate.innerHTML = ""
        return true
    }

    /* Pattern validation */
    if (cardDateYY.validity.patternMismatch === true) {
        cardDateYY.parentElement.classList.add("error")
        errorDate.innerHTML = "Wrong format, numbers only"
    } else {
        return true
    }
}

function cvcVali() {
    let errorCVC = document.querySelector('.error-box-cvc')

    if (cvc.value === "") {
        /*Adicionar classe error */
        cvc.parentElement.classList.add("error")
        /* adicionar mensagem de erro*/
        errorCVC.innerHTML = "Can't be blank"
    } else {
        cvc.parentElement.classList.remove("error")
        errorCVC.innerHTML = ""
        return true
    }

    /* Pattern validation */
    if (cvc.validity.patternMismatch === true) {
        cvc.parentElement.classList.add("error")
        errorCVC.innerHTML = "Wrong format, numbers only"
    } else {
        return true
    }
}

/*Thank you state*/ 
function finalValidation() {
    if (nameVali() === true && numberCardVali() === true && DateMMVali() === true && DateYYVali() === true && cvcVali() === true) {
        
        let formSection = document.querySelector('.form-section')
        let thanksState = document.querySelector('.thanks-state')

        formSection.style.display = 'none'
        thanksState.style.display = 'block'
        
    }
}

/* Continue button*/
let continueBTN = document.querySelector('.thanks-state__button')

continueBTN.addEventListener('click', function() {
        window.location.reload()
})







































































/*let button = document.querySelector(".form__button")

button.addEventListener("click", submit)
*/
/* Inputs */ /*
let inputName = document.querySelector('#form__card-name')
let cardNumber = document.querySelector('#form__card-number')
let cardDateMM = document.querySelector('#form__card-date--MM')
let cardDateYY = document.querySelector('#form__card-date--YY')
let cvc = document.querySelector('#form__card-CVC')

/* error boxes *//*
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

function submit() {
    /* VALIDATION */ /*
    let error = 0
    let completed = 0
    function validation() {
        let inputs = [inputName, cardNumber, cardDateMM, cardDateYY, cvc]
        let errorBoxes = [errorName, errorCardNumber, errorDate, errorDate, errorCVC]
        
      
        for (i = 0; i <= 4; i++) {
            if (inputs[i].value == "") {
                errorBoxes[i].innerHTML = "Can´t be blank"
                inputs[i].style.border = '1px solid hsl(0, 100%, 66%)'
                inputs[i].style.marginBottom = '0'
        } else {
            completed += 1
        }
            }regexvali()
    }
    validation()

    /* REGEX *//*
    function regexvali() {
        let inputs = [cardNumber, cardDateMM, cardDateYY, cvc]
        let errorBoxes = [errorCardNumber, errorDate, errorDate, errorCVC]
        

        
            for (i = 0; i <= 3; i++) {
                if (!inputs[i].checkValidity()) {
                    errorBoxes[i].innerHTML = "wrong format"
                } else {
                    error += 1
                }
            }
    }
    

    if (completed == 0 && error == 0) {
        thanksState()
        console.log('foi')
    }
}

/*Thank you state*/ /*
function thanksState() {
    let formSection = document.querySelector('.form-section')
    let thanksState = document.querySelector('.thanks-state')
    formSection.style.display = 'none'
    thanksState.style.display = 'block'
}

/* Continue button*//*
let continueBTN = document.querySelector('.thanks-state__button')
    continueBTN.addEventListener('click', function() {
        window.location.reload()
    })
    

/*
    onsubtmit
        verificar campos em branco 
        verificar regex 

        se estiver em branco mostra a mensagem
        se estiver no formato errado mostra a mensagem

        se estiver completo e no formato certo é enviado*/