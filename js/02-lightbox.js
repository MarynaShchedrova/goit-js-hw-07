import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');
const galleryCard = createGallery(galleryItems);

function createGallery(galleryItems) {
    return galleryItems.map(({ original, preview, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}" >
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
  </a>
</div>`;
    })
        .join('');
}

gallery.insertAdjacentHTML('beforeend', galleryCard);

new SimpleLightbox('.gallery a', {
    captionDelay: 250,
});