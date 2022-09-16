export function createCharacterCard(
  image = 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
  name = 'Rick',
  alive = 'alive',
  type = 'bla',
  episodes = [5],
) {
  const card = document.createElement('li');
  card.classList.add('card');
  card.innerHTML = `<div class="card__image-container">
<img
  class="card__image"
  src="${image}"
  alt="Rick Sanchez"
/>
<div class="card__image-gradient"></div>
</div>
<div class="card__content">
<h2 class="card__title">${name}</h2>
<dl class="card__info">
  <dt class="card__info-title">Status</dt>
  <dd class="card__info-description">${alive}</dd>
  <dt class="card__info-title">Type</dt>
  <dd class="card__info-description" data-js="type">${type}</dd>
  <dt class="card__info-title">Occurrences</dt>
  <dd class="card__info-description" data-js="occurence">${episodes.length}</dd>
</dl>
</div>`;
  return card;
}
