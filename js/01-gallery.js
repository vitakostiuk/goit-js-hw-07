import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainerRef = document.querySelector('.gallery');

const cardsMarkup = createGalleryMarkup(galleryItems);
const modalMarkup = `
  <template>
    <div class="modal">
    </div>
</template>
`;

galleryContainerRef.insertAdjacentHTML('beforeend', cardsMarkup);
galleryContainerRef.insertAdjacentHTML('afterend', modalMarkup);


galleryContainerRef.addEventListener('click', onGalleryContainerClick);

function createGalleryMarkup(items) {
  return galleryItems.map(({ preview, original, description }) => {
    return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
  }).join('');
}


function onGalleryContainerClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains('gallery__image')) {
    return;
  }

  console.log(evt.target.dataset.source);
  
  const instance = basicLightbox.create(`
      <img src="${evt.target.dataset.source}">
  `)

  instance.show()
}
