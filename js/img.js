// Este script añade un efecto de zoom a las imágenes de la galería
  document.addEventListener("DOMContentLoaded", () => {
    const galleryImgs = document.querySelectorAll(".gallery-grid div img");

    const overlay = document.createElement("div");
    overlay.classList.add("zoom-overlay");
    document.body.appendChild(overlay);

    galleryImgs.forEach(img => {
      img.addEventListener("click", (e) => {
        e.stopPropagation();
        if (img.classList.contains("zoomed")) {
          img.classList.remove("zoomed");
          overlay.style.display = "none";
        } else {
          document.querySelectorAll(".zoomed").forEach(z => z.classList.remove("zoomed"));
          img.classList.add("zoomed");
          overlay.style.display = "block";
        }
      });
    });

    overlay.addEventListener("click", () => {
      document.querySelectorAll(".zoomed").forEach(z => z.classList.remove("zoomed"));
      overlay.style.display = "none";
    });

    document.body.addEventListener("click", () => {
      document.querySelectorAll(".zoomed").forEach(z => z.classList.remove("zoomed"));
      overlay.style.display = "none";
    });
  });

