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

const searchInput = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const searchContainer = document.querySelector('.searchContainer');

function search(str) {
	let results = [];
	results = fruit.filter((fruit) => fruit.includes(str));

	// results = fruit.filter().includes(str);
	return results;
}

function searchHandler(e) {
	let str = e.target.value;
	console.log(str);
	// console.log(str);
	if (str) {
		str.toLowerCase();
		search(str);
	}
}

// 		results = fruit.filter(function (value) {
// 			fruit.includes(value);
// 		});
// 		console.log(results);
// 		console.log(value);
// 	}
// }

// 	for(const fruit of results) {
// 		const listResults = document.createElement('li')
// 		listResults.classList.add('listResults')
// 		const text = document.createTextNode(fruit)
// 		listResults.appendChild(text)
// 		suggestions.appendChild(listResults)
// 	}

// }
// let value = e.target.value
// if(value && value.length > 0) {
// 	value = value.toLowerCase()

// }

// function noResults() {
// 	const error = document.createElement('li')
// 	error.classList
//}
// 	let userInput = e.target.value;
// 	let emptyArray = [];
// 	if (userInput) {
// 		emptyArray = fruit.filter((data) => {
// 			return data.toLowerCase().includes(userInput.toLowerCase());
// 		});
// 		emptyArray = emptyArray.map((data) => {
// 			return (data = '<li>' + data + '<li>');
// 		});
// 		input.classList.add('.suggestions');
// 		showSuggestions(emptyArray);
// 	}
// }

//search handler should

function showSuggestions(results, inputVal) {
	results = fruit.filter().toLowerCase().includes(inputVal);
	return results;

	// results.includes(inputVal.toLowerCase());
	// search();
	// let results = [];
	// let inputVal = searchContainer.value;
	// if (inputVal.length) {
	// 	fruit.filter((inputVal) => {
	// 		return inputVal.toLowerCase().includes(inputVal.toLowerCase());
	// 	});
	// 	console.log(results);
	// 	return results;
	// }
}

function useSuggestion(e) {
	// TODO
}

searchInput.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
