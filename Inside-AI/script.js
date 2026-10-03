const filterButtons = [...document.querySelectorAll('[data-filter]')];
const cards = [...document.querySelectorAll('[data-article]')];
const search = document.querySelector('#article-search');
const empty = document.querySelector('#no-results');
let currentFilter = 'All';
function applyFilters() {
  const query = search.value.trim().toLocaleLowerCase();
  let shown = 0;
  for (const card of cards) {
    const match = (currentFilter === 'All' || card.dataset.type === currentFilter) && card.textContent.toLocaleLowerCase().includes(query);
    card.hidden = !match;
    if (match) shown++;
  }
  empty.hidden = shown > 0;
  document.querySelector('#result-count').textContent = `${shown} ${shown === 1 ? 'note' : 'notes'}`;
}
filterButtons.forEach(button => button.addEventListener('click', () => {
  currentFilter = button.dataset.filter;
  filterButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  applyFilters();
}));
search.addEventListener('input', applyFilters);
