const swiper = new Swiper(".slider-content", {
  rtl: true,
  loop: true,
  grabCursor: true,
  rewind: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    620: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

let profileIndex = 1;
showProfiles(profileIndex);

function plusProfiles(n) {
  showProfiles((profileIndex += n));
}

function currentProfile(n) {
  showProfiles((profileIndex = n));
}

function showProfiles(n) {
  let i;
  let slides = document.getElementsByClassName("profile-data");
  // let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    profileIndex = 1;
  }
  if (n < 1) {
    profileIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[profileIndex - 1].style.display = "flex";
}

let slideIndex = 2;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("studio-image");
  let dots = document.getElementsByClassName("studio-dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}

const box = document.querySelector(".video-box");
const video = box.querySelector("video");
const btn = document.querySelector(".play-btn");

video.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
video.addEventListener("play", () => box.classList.add("playing"));
video.addEventListener("pause", () => box.classList.remove("playing"));
