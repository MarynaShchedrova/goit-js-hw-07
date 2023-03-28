import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector(".gallery");
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
gallery.addEventListener('click', selectGalleryEl);

function selectGalleryEl(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}" width="800" height="600">`,
        {
            onShow: () => {
                window.addEventListener('keydown', onKeydownEsc);
            },
            onClose: () => {
                window.removeEventListener('keydown', onKeydownEsc);
            },
        });

    const onKeydownEsc = event => {
        console.log(event.code);
        if (event.code === 'Escape') {
            instance.close();
        }
    };

    instance.show();

}