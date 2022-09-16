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


function fetchCharacters (){
 const fetchedCharacters = fetch ("https://rickandmortyapi.com/api/character").then(Response => {
  return Response.json()
 }).then(data => {
  console.log(data);
 })


};
fetchCharacters();
const newCard = createCharacterCard();
cardContainer.append(newCard);

