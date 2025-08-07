let number1 = document.getElementById("number-1")
let number2 = document.getElementById("number-2")
document.getElementById('home-plus-1').addEventListener('click', increment1Number1);
document.getElementById('home-plus-2').addEventListener('click', increment2Number1);
document.getElementById('home-plus-3').addEventListener('click', increment3Number1);
document.getElementById('guest-plus-1').addEventListener('click', increment1Number1);
document.getElementById('guest-plus-2').addEventListener('click', increment2Number1);
document.getElementById('guest-plus-3').addEventListener('click', increment3Number1);
document.getElementById("new-game").addEventListener("click", newGame);

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
