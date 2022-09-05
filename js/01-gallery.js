import { galleryItems } from "./gallery-items.js";

// Change code below this line
const gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    (item) => `
<div class="gallery__item">
  <a class="gallery__link" href=${item.original}>
    <img
      class="gallery__image"
      src=${item.preview}
      data-source=${item.original}
      alt=${item.description}
    />
  </a>
</div>`
  )
  .join("");

gallery.innerHTML = markup;

gallery.addEventListener("click", zoomImg);

function zoomImg(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) return;

  let orgUrl = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src=${orgUrl} width="800" height="600">
`);
  instance.show();

  gallery.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
    }
  });
}

console.log(galleryItems);
