// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "preview"

document.addEventListener("turbo:load", () => {
  const openBtn = document.getElementById("open-search");
  const closeBtn = document.getElementById("close-search");
  const modal = document.getElementById("search-modal");

  if (openBtn && closeBtn && modal) {
    openBtn.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  }
});
