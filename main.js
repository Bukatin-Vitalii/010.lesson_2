function generateList(array) {
	let ul = document.createElement('ul');
	for (let i = 0; i < array.length; i++) {
		let li = document.createElement('li');
		li.innerText = array[i];
		ul.appendChild(li);
	}
	return ul;
}

let array = [1, 2, 3];

document.body.appendChild(generateList(array));

let array2 = [1, 2, [1.1, 1.2, 1.3], 3];

document.body.appendChild(generateList(array2));