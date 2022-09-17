import {createCharacterCard} from './components/card/card.js';
import {createSearchBar} from './components/search-bar/search-bar.js';
import {createNavPagination} from './components/nav-pagination/nav-pagination.js';
import {createNavButton} from './components/nav-button/nav-button.js';

// States
let maxPage = 1;
let page = 1;
let searchQuery = '';

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
const searchBar = createSearchBar(searchBarEventHandler);
searchBarContainer.append(searchBar);
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = createNavButton('prev', buttonEventHandler);
const pagination = createNavPagination();
const nextButton = createNavButton('next', buttonEventHandler);
navigation.append(prevButton, pagination, nextButton);

async function fetchCharactersAndRender() {
  cardContainer.innerHTML = '';
  const fetchedCharacters = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}&name=${searchQuery}`,
  );
  const data = await fetchedCharacters.json();

  maxPage = data.info.pages;
  page === maxPage
    ? (nextButton.disabled = true)
    : (nextButton.disabled = false);
  page === 1 ? (prevButton.disabled = true) : (prevButton.disabled = false);

  pagination.textContent = page + ' / ' + maxPage;

  data.results.forEach(character => {
    const newCard = createCharacterCard(character);
    cardContainer.append(newCard);
  });
}

fetchCharactersAndRender();

function searchBarEventHandler(value) {
  searchQuery = value;
  page = 1;
  fetchCharactersAndRender();
}

function buttonEventHandler(navType) {
  navType === 'prev' ? --page : ++page;
  fetchCharactersAndRender();
}
