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

	document.addEventListener("keydown", onClose);

	function onClose(e) {
		if (e.code !== "Escape") {
			return;
		}

		instance.close();
		document.removeEventListener("keydown", onClose);

		console.log(e.code);
	}
}
