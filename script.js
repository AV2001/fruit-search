const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = [
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

function search(str) {
    let results = [];
    results = fruits.filter((fruit) => {
        if (fruit.toLowerCase().includes(str.toLowerCase())) {
            return fruit;
        }
    });
    return results;
}

function searchHandler(e) {
    if (e.target.value.length > 0) {
        showSuggestions(search(e.target.value));
    } else {
        suggestions.innerText = '';
    }
}

function showSuggestions(results) {
    // Clear the existing list items before displaying new ones
    suggestions.innerText = '';
    results.forEach((result) => {
        const suggestion = document.createElement('li');
        suggestion.innerText = result;
        suggestions.append(suggestion);
    });
}

function useSuggestion(e) {
    // Set the input's value to the selected suggestion
    input.value = e.target.innerText;
    // Clearing suggestions after a suggestion is clicked
    suggestions.innerText = '';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
