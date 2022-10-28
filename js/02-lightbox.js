import { galleryItems } from "./gallery-items.js";
// Change code below this line

function createGalleryMarkup(items) {
	return items
		.map(({ preview, original, description }) => {
			return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
		})
		.join("");
}

const galleryContainer = document.querySelector(".gallery");

const galleryElementMarkup = createGalleryMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryElementMarkup);

const lightbox = new SimpleLightbox(".gallery__item", {
	captionsData: "alt",
	captionDelay: 250,
});

console.log(galleryItems);
