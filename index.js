let number1 = document.getElementById("number-1")
let number2 = document.getElementById("number-2")

let homeNumber = 0 
let guestNumber = 0

function increment1Number1(){
    homeNumber += +1
    number1.textContent = homeNumber
}

function increment2Number1(){
    homeNumber += +2
    number1.textContent = homeNumber
}

function increment3Number1(){
    homeNumber += +3
    number1.textContent = homeNumber
}

function increment1Number2(){
    guestNumber += +1
    number2.textContent = guestNumber
}

function increment2Number2(){
    guestNumber += +2
    number2.textContent = guestNumber
}

function increment3Number2(){
    guestNumber += +3
    number2.textContent = guestNumber
}

function newGame(){
   guestNumber = 0
   homeNumber = 0
   number2.textContent = guestNumber
   number1.textContent = homeNumber
}