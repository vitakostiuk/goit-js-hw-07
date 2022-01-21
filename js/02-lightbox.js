import { galleryItems } from './gallery-items.js';

const galleryContainerRef = document.querySelector('.gallery');

const cardsMarkup = createGalleryMarkup(galleryItems);
galleryContainerRef.insertAdjacentHTML('beforeend', cardsMarkup);

function createGalleryMarkup(items) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
      <a class="gallery__item" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
          title="${description}"
        />
      </a>
`
  }).join('');
};

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionPosition: 'bottom',
  captionDelay: 250,
}
);
console.log(lightbox);
