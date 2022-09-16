import {createCharacterCard} from './components/card/card.js';

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = '';

async function fetchCharactersAndRender() {
  cardContainer.innerHTML = '';
  const fetchedCharacters = await fetch(
    'https://rickandmortyapi.com/api/character',
  );
  const data = await fetchedCharacters.json();
  console.log(data);
  data.results.forEach(character => {
    console.log(character);
    const newCard = createCharacterCard(character);
    cardContainer.append(newCard);
  });
}

fetchCharactersAndRender();
