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
// const searchContainer = document.querySelector('.searchContainer');

function removeVowels(str) {
	const vowels = 'aeiou';
	return str
		.toLowerCase()
		.split('')
		.filter(function (val) {
			return vowels.indexOf(val) === -1;
		});
	// .join('');
}

function search(str) {
	let results = [];

	if (str.length > -1) {
		results = fruit.filter((inputVal) =>
			inputVal.toLowerCase().includes(str.toLowerCase())
		);
		// results.classList.add('suggestions');
	}
	showSuggestions(results, str);

	// showSuggestions(results, inputVal);
	// results.classList.add('suggestions ul');

	//console.log(classList);
	// //showSuggestions();
}

// 	return fruit.filter((val) => {
// 		return (results = fruit.includes(val.toLowerCase()));
// 	});

// for Each char of str) {
// let newL = document.createElement('li')

// console.log(results);
// return results;

function searchHandler(e) {
	let str = e.target.value;
	search(str);
	// showSuggestions(search(str));

	// let results = [];
	// let input = e.target.value;
	// fruit.forEach(
	// 	(results = fruit.filter((input) => {
	// 		return fruit.includes(input.toLowerCase());
	// 	}))
	// );
}

function showSuggestions(results, inputVal) {
	suggestions.innerHTML = results.map((i) => `<li>${i}</li>`).join('');
}
// const text = results.map((list) => {
// 	return `<li> ${list} </li>`;
// });
// suggestions.innerHTML = `<`;

// let li = document.createElement('li');

// li.innerHTML =
// newL = document.getElementsByTagName('ul');
// newL.innerHTML = results
// 	.map((list) => {
// 		return newL.appendChild(`<li>${search(results)} </li>`);
// 	})
// 	.join('');

// if (search() && searchHandler()) {
// 	console.log(results);
// }
// console.log(inputVal);
// if (inputVal.length > -1) {
// 	results = search().value;
// 	for (let i = 0; i > results.length; i++) {
// 		console.log(results);

// 	}
// }
// console.log(results);

function useSuggestion(e) {}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

// let results = [];
// if (str.length) {
// 	console.log(str);
// 	str.toLowerCase();
// 	results = fruit.filter((el) => {
// 		return fruit.toString().includes(el);
// 	});
// 	return results;
// }

// results = fruit.filter().includes(str);

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

// console.log(str);

// console.log(e);
// console.log(fruit.toString().includes('ap'));
// const newStr = fruit.toString();
// console.log(newStr);
// const search = fruit.filter(() => {
// 	fruit.includes('ap');
// 	console.log(search);
// 	return search;
