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

let instance = {};

function showImage(e) {
	e.preventDefault();
	if (!e.target.classList.contains("gallery__image")) {
		return;
	}

	instance = basicLightbox.create(
		`
    <img src="${e.target.dataset.source}" width="800" height="600">`,
		{
			onShow: () => document.addEventListener("keydown", onEsc),
			onClose: () => document.removeEventListener("keydown", onEsc),
		}
	);
	instance.show();
}

function onEsc(e) {
	if (e.code === "Escape") {
		instance.close();
	}
	console.log(e.code);
}
