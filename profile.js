console.log('hello world')

//grab necessary elements
const colorBtn = document.querySelector('#color')
const placeBtn = document.querySelector('#place')
const ritualBtn = document.querySelector('#ritual')

//additional elements from part 4
const message = document.querySelector('#message')

const yes = document.querySelector('#yes')
const maybe = document.querySelector('#maybe')
const no = document.querySelector('#no')



//write functions

function colorAlert(event) {
    event.preventDefault()
    alert('my favorite color is dark green')
}

function placeAlert(event){
    event.preventDefault()
    alert('my favorite place is lake kachess')
}

function ritualAlert(event){
    event.preventDefault()
    alert('my favorite ritual is cuddling up with a good book every night')
}

//additonal functions for part 4 flair
function yesMessage(event){
    event.preventDefault
    message.textContent = 'i knew i liked you'
    revealMessage()
}

function maybeMessage(event){
    event.preventDefault()
    message.textContent = 'it might be weird if we liked ALL the same things'
    revealMessage()
}

function noMessage(event){
    event.preventDefault()
    message.textContent = "i have to say.. i'm pretty disappointed"
    revealMessage()
}

function revealMessage() {
    message.classList.remove('hide')

    setTimeout(function() {
        message.classList.add('hide')
    }, 2000)
}



//add event listeners

colorBtn.addEventListener('click', colorAlert)
placeBtn.addEventListener('click', placeAlert)
ritualBtn.addEventListener('click', ritualAlert)

//additional event listeners for part 4-- just being extra

yes.addEventListener('click', yesMessage)
maybe.addEventListener('click', maybeMessage)
no.addEventListener('click', noMessage)