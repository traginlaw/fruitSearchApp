// const input = document.querySelector('#fruit');
// const suggestions = document.querySelector('.suggestions ul');

const fruit = [
	'Apple',
	'Apricot',
	'Avocado 🥑',
	'Banana',
	'Bilberry',
	'Blackberry',
	'Blackcurrant',
	'Blueberry',
	'Boysenberry',
	'Currant',
	'Cherry',
	'Coconut',
	'Cranberry',
	'Cucumber',
	'Custard apple',
	'Damson',
	'Date',
	'Dragonfruit',
	'Durian',
	'Elderberry',
	'Feijoa',
	'Fig',
	'Gooseberry',
	'Grape',
	'Raisin',
	'Grapefruit',
	'Guava',
	'Honeyberry',
	'Huckleberry',
	'Jabuticaba',
	'Jackfruit',
	'Jambul',
	'Juniper berry',
	'Kiwifruit',
	'Kumquat',
	'Lemon',
	'Lime',
	'Loquat',
	'Longan',
	'Lychee',
	'Mango',
	'Mangosteen',
	'Marionberry',
	'Melon',
	'Cantaloupe',
	'Honeydew',
	'Watermelon',
	'Miracle fruit',
	'Mulberry',
	'Nectarine',
	'Nance',
	'Olive',
	'Orange',
	'Clementine',
	'Mandarine',
	'Tangerine',
	'Papaya',
	'Passionfruit',
	'Peach',
	'Pear',
	'Persimmon',
	'Plantain',
	'Plum',
	'Pineapple',
	'Pomegranate',
	'Pomelo',
	'Quince',
	'Raspberry',
	'Salmonberry',
	'Rambutan',
	'Redcurrant',
	'Salak',
	'Satsuma',
	'Soursop',
	'Star fruit',
	'Strawberry',
	'Tamarillo',
	'Tamarind',
	'Yuzu',
];

const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

function search(str) {
	let results = [];
	if (str.length !== -1) {
		results = fruit.filter((inputVal) =>
			inputVal.toLowerCase().includes(str.toLowerCase())
		);
		showSuggestions(results, str);
	}

	
}

function searchHandler(e) {
	let str = e.target.value;
	search(str);
	
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = '';
	const newExp = new RegExp(inputVal, 'ig');

	if (inputVal.length > 0) {
		results.forEach((keyword) => {
			const newL = document.createElement('li');
			newL.innerHTML = keyword.replace(newExp, '<b>$&</b>');
			suggestions.appendChild(newL);

			newL.addEventListener('click', () => {
				input.value() = keyword;
				suggestions.classList.remove('has-suggestions');
			});
		});
		suggestions.classList.add('has-suggestions');
	} else {
		suggestions.classList.remove('has-suggestions');
	}
}

function useSuggestion(e) {
	console.log(e);
	if (e.target.tagName === 'LI') {
		input.value = e.target.textContent;
		suggestions.innerHTML = '';
	}
}

function color(e) {
	const newItem = suggestions.querySelectorAll('li')
	newItem.forEach(item => {
		item.classList.remove('highlight')
	})
	if(e.target.tagName === 'LI') {
		e.target.classList.add('highlight')
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
suggestions, addEventListener('mouseover', color);
