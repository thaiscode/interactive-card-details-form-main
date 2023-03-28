let form = document.querySelector('.form')
let button = document.querySelector('.form__button')
button.addEventListener('click', (e) => {
    /*Remove default browser behavior*/
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
    let inputNumber = e.target.value 
    let numberFormat = `${e.target.value.slice(0, 4)} ${e.target.value.slice(4, 8)} ${e.target.value.slice(8, 12)} ${e.target.value.slice(12, 16)}`
    numberCard.innerHTML = inputNumber.replace(/[0-9]{16}/, numberFormat) 
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
        /*Add error class* */
        inputName.parentElement.classList.add("error")
        /*Add error message*/
        errorName.innerHTML = "Can't be blank"
        return false
    } else {
        inputName.parentElement.classList.remove("error")
        errorName.innerHTML = ""
        return true
    }
}

function numberCardVali() {
    let errorCardNumber = document.querySelector('.error-box-cardNumber')

    if (cardNumber.value === "") {
        /*Add error class*/
        cardNumber.parentElement.classList.add("error")
        /*Add error message*/
        errorCardNumber.innerHTML = "Can't be blank"
        
    } else{
        cardNumber.parentElement.classList.remove("error")
        errorCardNumber.innerHTML = ""
       
    }

    /* Pattern validation */
    if (!cardNumber.checkValidity()) {
        cardNumber.parentElement.classList.add("error")
        errorCardNumber.innerHTML = "Wrong format, numbers only"
        console.log("entrou aqui")
        return false
        
    } else {
        return true
    }
    
}

function DateMMVali() {
    let errorDate = document.querySelector('.error-box-date')

    if (cardDateMM.value === "") {
        /*Add error class*/
        cardDateMM.parentElement.classList.add("error")
        /*Add error message*/
        errorDate.innerHTML = "Can't be blank"
        
    } else {
        cardDateMM.parentElement.classList.remove("error")
        errorDate.innerHTML = ""
       
    }

    /* Pattern validation */
    if (!cardDateMM.checkValidity()) {
        cardDateMM.parentElement.classList.add("error")
        errorDate.innerHTML = "Wrong format, numbers only"
        return false
    } else {
        return true
    }
}

function DateYYVali() {
    let errorDate = document.querySelector('.error-box-date')

    if (cardDateYY.value === "") {
        /*Add error class*/
        cardDateYY.parentElement.classList.add("error")
        /* adicionar mensagem de erro*/
        errorDate.innerHTML = "Can't be blank"
        
    } else {
        cardDateYY.parentElement.classList.remove("error")
        errorDate.innerHTML = ""
        
    }

    /* Pattern validation */
    if (!cardDateYY.checkValidity()) {
        cardDateYY.parentElement.classList.add("error")
        errorDate.innerHTML = "Wrong format, numbers only"
        return false
    } else {
        return true
    }
}

function cvcVali() {
    let errorCVC = document.querySelector('.error-box-cvc')

    if (cvc.value === "") {
        /*Add error class*/
        cvc.parentElement.classList.add("error")
        /*Add error message*/
        errorCVC.innerHTML = "Can't be blank"
        
    } else {
        cvc.parentElement.classList.remove("error")
        errorCVC.innerHTML = ""
    }

    /* Pattern validation */
    if (!cvc.checkValidity()) {
        cvc.parentElement.classList.add("error")
        errorCVC.innerHTML = "Wrong format, numbers only"
        return false
    } else {
        return true
    }
}

/*Thank you state*/ 
function finalValidation() {
    if (numberCardVali() === true && DateMMVali() === true && DateYYVali() === true && cvcVali() === true && nameVali() === true) {
        
        let formSection = document.querySelector('.form-section')
        let thanksState = document.querySelector('.thanks-state')

        formSection.style.display = 'none'
        thanksState.style.display = 'block'
        
    } else {

    }
}

/* Continue button */
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