console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let duck = document.getElementById("#duck")

const compliment = (event) => {
	event.preventDefault()
	alert('You really quack me up!')
}

document.querySelector('img').addEventListener('mouseover', compliment)