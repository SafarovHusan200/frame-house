document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("video");
  const text = document.getElementById("text");
  const videoContent = document.getElementById("video__content");
  const textContent = document.getElementById("text__content");
  const selectElement = document.getElementById("ideal__select");
  const techBtns = document.querySelectorAll("#techno__btn");
  const technoElements = document.querySelectorAll(".techno-el");

  techBtns.forEach((btn, i) => {
    btn.addEventListener("mouseenter", () => {
      technoElements[i].style.transform = "scale(1.2)";
    });
    btn.addEventListener("mouseleave", () => {
      technoElements[i].style.transform = "scale(1)";
    });
  });
  technoElements.forEach((el, i) => {
    el.addEventListener("mouseenter", () => {
      techBtns[i].style.transform = "scale(1.2)";
    });
    el.addEventListener("mouseleave", () => {
      techBtns[i].style.transform = "scale(1)";
    });
  });

  // Initialize Slick Slider for video content
  $(".video__content .slider").slick({
    centerPadding: "60px",
    slidesToShow: 1,
    dots: true,
  });

  // Initialize Slick Slider for text content
  $(".text__content .slider").slick({
    centerPadding: "60px",
    slidesToShow: 3,
    dots: true,
  });
  // Initialize Slick Slider for projects__slider
  $(".projects__slider .slider").slick({
    centerPadding: "60px",
    slidesToShow: 3,
    // dots: true,
  });

  // Initialize Fancybox
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

  // Toggle active class on text and video elements
  text.addEventListener("click", () => {
    text.classList.add("active");
    textContent.style.display = "block";
    videoContent.style.display = "none";
    video.classList.remove("active");
  });

  video.addEventListener("click", () => {
    video.classList.add("active");
    videoContent.style.display = "block";
    textContent.style.display = "none";
    text.classList.remove("active");
  });

  // $("#accordion").accordion();
});
