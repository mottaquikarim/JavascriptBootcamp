const h1 = document.querySelector('h1');
const input = document.querySelector('input');
const oddButtons = document.querySelectorAll('.js-odd');
const evenButtons = document.querySelectorAll('.js-even')
const colors = ['red', 'green', 'blue'];
let i = 0;


const cycleColors = function() {
	h1.style.color = colors[i]
	input.style.borderColor = colors[i]
	i = (i+1) % colors.length;
}

const onH1Clicked = function(e) {
	if (timeout !== null) {
		clearInterval(timeout);
		timeout = null;
	}
	else {
		timeout = setInterval(cycleColors, 1000);
	}

	// AJAX call - window.fetch() / axios library
}

const onUserTyped = function(e) {
	h1.innerHTML = e.target.value;
}

const onOddButtonClicked = function(e) {
	alert(e.target.innerHTML)
}


const onEvenButtonClicked = function(e) {
	alert(e.target.innerHTML.toLowerCase())
}

let timeout = setInterval(cycleColors, 1000);
h1.addEventListener('click', onH1Clicked);
input.addEventListener('input', onUserTyped)

for (let button of oddButtons) {
	button.addEventListener('click', onOddButtonClicked)
}

for (let button of evenButtons) {
	button.addEventListener('click', onEvenButtonClicked)
}

