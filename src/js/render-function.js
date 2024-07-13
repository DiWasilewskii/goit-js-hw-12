export function renderPictures(hits) {
    return hits.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => `
    <li class="gallery-card">
        <a class="gallery-link" href="${largeImageURL}">
          <img
            class="gallery-image"
            src="${webformatURL}" 
            alt="${tags}" 
            width="360"
            height="152" 
          />
        </a>
        <div class="discribe-box">
          <ul class="discribe-list">
            <li class="discribe-item">
              <h2 class="discribe-title">Likes</h2>
              <p class="discribe-text">${likes}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Views</h2>
              <p class="discribe-text">${views}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Comments</h2>
              <p class="discribe-text">${comments}</p>
            </li>
            <li class="discribe-item">
              <h2 class="discribe-title">Downloads</h2>
              <p class="discribe-text">${downloads}</p>
            </li>
          </ul>
        </div>
      </li>
    `).join("");
}
export function handlerError(error) {
  switch (error) {
    case 'outdata':
      iziToast.warning({
        title: 'Error',
        message: 'Введіть данні для пошуку!',
      });
      break;
    case 'nodata':
      iziToast.warning({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      break;
    default:
      iziToast.error({
        title: 'Error',
        message: 'Щось пішло не так. Ми працюемо над вирішенням питання!',
      });
      break;
  }
}