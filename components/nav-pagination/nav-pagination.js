export function createNavPagination() {
  const newNavPagination = document.createElement('span');
  newNavPagination.classList = 'navigation__pagination';
  newNavPagination.dataset.js = 'navigation__pagination';
  return newNavPagination;
}
