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
btn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
});
video.addEventListener("play", () => box.classList.add("playing"));
video.addEventListener("pause", () => box.classList.remove("playing"));

function scrollCarousel(distance) {
  const container = document.getElementById("scrollTarget");
  // scrollBy(x-coordinate, y-coordinate)
  const cardWidth = container.querySelector(".card").offsetWidth + 20;
  distance = distance > 0 ? cardWidth : -cardWidth;

  container.scrollBy({
    left: distance,
    behavior: "smooth",
  });
}
