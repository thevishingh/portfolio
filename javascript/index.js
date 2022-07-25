// change background header
function scrollHeader() {
  const header = document.getElementById("header");
  // when the scroll is greater than 50vw add the acroll-header class to the header tag.
  if (this.scrolly >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/* ===== Servicers Modal */
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__buttons"),
  modalClose = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

// for display services data list
modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

// for close services data list

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});

// mixitups filter
let mixerPortfolio = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

// link Active work
const linkWork = document.querySelectorAll(".work__item");

function activeWork() {
  linkWork.forEach((l) => {
    l.classList.remove("active__work");
  });
  this.classList.add("active__work");
}
linkWork.forEach((l) => {
  l.addEventListener("click", activeWork);
});

// swiper pagination testimonials
let swiperTestimonials = new Swiper(".testimonials__container", {
  spaceBetween: 30,
  loop: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});
// =====Scroll reval animation
const sr = ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  delay:400,
  // reset:true,
})
sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, {delay:500})
sr.reveal(`.home__social, .home__scroll`, {delay:500, origin:'bottom'})

