export function createNavButton(navType, buttonEventHandler) {
  const newNavButton = document.createElement('button');
  newNavButton.classList = `button button--${navType}`;
  newNavButton.dataset.js = `button-${navType}`;
  navType === 'prev'
    ? (newNavButton.textContent = 'previous')
    : (newNavButton.textContent = 'next');

  newNavButton.addEventListener('click', () => {
    buttonEventHandler(navType);
  });
  return newNavButton;
}
