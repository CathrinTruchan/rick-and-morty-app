export function createSearchBar() {
  const searchBarForm = document.createElement('form');
  searchBarForm.classList = 'search-bar';
  searchBarForm.dataset.js = 'search-bar';
  searchBarForm.innerHTML = `<input
  name="query"
  class="search-bar__input"
  type="text"
  placeholder="search characters"
  aria-label="character name"
/>
<button class="search-bar__button" aria-label="search for character">
  <img
    class="search-bar__icon"
    src="assets/magnifying-glass.png"
    alt=""
  />
</button>`;
  return searchBarForm;
}
