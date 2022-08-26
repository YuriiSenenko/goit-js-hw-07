import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('.gallery');
galleryContainer.addEventListener('click', onClickImage);

//змінна - результат виклику функції
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

//Підключаю розмітку в HTML
galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

//Створюю розмітку галереї
function createGalleryItemsMarkup(galleryItems) {
	return galleryItems
		.map(({ preview, original, description }) => {
			return `<a class="gallery__item" href="${original}">
	<img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
		})
		.join('');
}

function onClickImage(event) {
	event.preventDefault();
	const imgItem = event.target.classList.value.includes('gallery__image');
	if (!imgItem) return;

	const currentImgLink = event.target.dataset.source;
	new SimpleLightbox('.gallery a', {
		animationSpeed: 150,
		captionsData: 'alt',
		captionDelay: 50,
	});
}
