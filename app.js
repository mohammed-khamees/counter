const btns = document.querySelectorAll('.btn');
const value = document.getElementById('value');

let counter = 0;

//Solution1

// const decrease = document.querySelector('.decrease');
// const reset = document.querySelector('.reset');
// const increase = document.querySelector('.increase');

// decrease.addEventListener('click', () => {
// 	counter--;
// 	value.textContent = counter;
// });

// reset.addEventListener('click', () => {
// 	counter = 0;
// 	value.textContent = counter;
// });

// increase.addEventListener('click', () => {
// 	counter++;
// 	value.textContent = counter;
// });

//Solution2

btns.forEach((btn) => {
	btn.addEventListener('click', function (e) {
		const element = e.currentTarget.classList;
		if (element.contains('decrease')) {
			counter--;
		} else if (element.contains('increase')) {
			counter++;
		} else {
			counter = 0;
		}
		if (counter > 0) {
			value.style.color = 'green';
		} else if (counter < 0) {
			value.style.color = 'red';
		} else {
			value.style.color = `hsl(209, 61%, 16%)`;
		}
		value.textContent = counter;
	});
});
