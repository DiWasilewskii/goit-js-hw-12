import { handlerError } from './render-function';

const searchSettings = {
  key: '44856492-1c75259359e870db5bcbdf4ec',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
};

export function generateSearchString(searchText) {
  searchSettings.q = searchText;
  const urls = new URLSearchParams(searchSettings);
  return `https://pixabay.com/api/?${urls}`;
}
export function fetchImage(qveryURL) {
  return fetch(qveryURL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}