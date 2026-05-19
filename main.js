"use strict";

/* =========================================
   DOM
========================================= */

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalClose = document.getElementById("modalClose");

const expandButtons = document.querySelectorAll(".expand-button");

/* =========================================
   INIT
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  revealCardsOnScroll();
  initializeModal();
});

/* =========================================
   SCROLL REVEAL
========================================= */

function revealCardsOnScroll() {
  const elements = document.querySelectorAll(
    ".pitch-card, .feature-card"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  elements.forEach((element) => {
    element.classList.add("hidden");
    observer.observe(element);
  });
}

/* =========================================
   MODAL
========================================= */

function initializeModal() {
  expandButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const image = button.dataset.image;
      const title = button.dataset.title;

      modalImage.src = image;
      modalTitle.textContent = title;

      modal.classList.add("active");

      document.body.style.overflow = "hidden";
    });
  });

  modalClose.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("modal-overlay")
    ) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
/* VARIANT IMAGES */

const variantButtons =
  document.querySelectorAll(".variant-expand");

variantButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.dataset.image;
    const title = button.dataset.title;

    modalImage.src = image;
    modalTitle.textContent = title;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
  });
});  

/* GAME ELEMENTS */

const elementButtons =
  document.querySelectorAll(".element-expand");

elementButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.dataset.image;
    const title = button.dataset.title;

    modalImage.src = image;
    modalTitle.textContent = title;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";
  });
});
}

function closeModal() {
  modal.classList.remove("active");

  document.body.style.overflow = "";
}