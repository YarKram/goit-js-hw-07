import { galleryItems } from "./gallery-items.js";
// Change code below this line

function createGalleryMarkup(items) {
	return items
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item">
	<a class="gallery__link" href="${original}">
		<img
			class="gallery__image"
			src="${preview}"
			data-source="${original}"
			alt="${description}"
		/>
	</a>
</div>`;
		})
		.join("");
}

const galleryContainer = document.querySelector(".gallery");

const galleryElementMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryElementMarkup);
galleryContainer.addEventListener("click", showImage);
function showImage(e) {
	e.preventDefault();
	if (!e.target.classList.contains("gallery__image")) {
		return;
	}
	const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`);

	instance.show();
}

// console.log(galleryItems);
// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js. Разбей его на несколько подзадач:

// Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.
// Реализация делегирования на div.gallery и получение url большого изображения.
// Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// Открытие модального окна по клику на элементе галереи. Для этого ознакомься с документацией и примерами.
// Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.
