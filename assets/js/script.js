document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("video");
  const text = document.getElementById("text");
  const videoContent = document.getElementById("video__content");
  const textContent = document.getElementById("text__content");
  const selectElement = document.getElementById("ideal__select");
  const techBtns = document.querySelectorAll("#techno__btn");
  const technoElements = document.querySelectorAll(".techno-el");
  const menuOpenBtn = document.getElementById("menu__open__btn");
  const closeBtn = document.getElementById("close__btn");
  const navbar = document.getElementById("navbar");
  const tableContent = document.querySelector(".table__content");
  const tarifScroll = document.querySelector(".tarif__scroll");
  const cardProject = document.querySelectorAll("#card__project");
  const modalBlock = document.querySelectorAll("#modal__block");
  const overlay = document.getElementById("overlay");
  const btnTableFull = document.getElementById("btn__table__full");
  const soya = document.getElementById("soya");

  menuOpenBtn.addEventListener("click", () => {
    navbar.classList.add("active");
  });

  btnTableFull.addEventListener("click", () => {
    tableContent.style.height = "auto";
    soya.style.display = "none";
  });

  closeBtn.addEventListener("click", () => {
    navbar.classList.remove("active");
  });

  document.addEventListener("scroll", () => {
    navbar.classList.remove("active");
  });

  tarifScroll.addEventListener("click", () => {
    tableContent.classList.toggle("scrolled");
  });

  techBtns.forEach((btn, i) => {
    btn.addEventListener("mouseenter", () => {
      technoElements[i].style.transform = "scale(1.2)";

      technoElements[i].querySelector(".el__img").classList.add("active");
    });
    btn.addEventListener("mouseleave", () => {
      technoElements[i].style.transform = "scale(1)";
      technoElements[i].querySelector(".el__img").classList.remove("active");
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

  // Hero slick
  $(".hero__slider").slick({
    infinite: true, // Cheksiz davom etishi uchun
    // slidesToShow: 1,
    // slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // fade: true,

    speed: 500,
    fade: true,
    cssEase: "linear",
  });

  // Initialize Slick Slider for video content
  $(".video__content .slider").slick({
    centerPadding: "-60px",
    slidesToShow: 1,
    dots: true,
    infinite: true,
  });
  $(".chegirma .slider").slick({});

  $("#text__content .slider").slick({
    centerPadding: "60px",
    slidesToShow: 3,
    dots: true,
    arrows: true, // If you want arrows for navigation
    infinite: true, // To loop through slides
    responsive: [
      {
        breakpoint: 768, // For smaller screens
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 1024, // For medium screens
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
          centerPadding: "50px",
        },
      },
    ],
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
    textContent.style.visibility = "visible";
    textContent.style.height = "auto";
    videoContent.style.display = "none";
    video.classList.remove("active");
  });

  video.addEventListener("click", () => {
    video.classList.add("active");
    videoContent.style.display = "block";
    textContent.style.display = "none";
    textContent.style.visibility = "hidden";
    text.classList.remove("active");
  });

  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: ".slider-nav",
  });

  $(".slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: false,
  });

  cardProject.forEach((cp, i) => {
    cp.addEventListener("click", () => {
      modalBlock[i].classList.add("active");
      document.body.style.overflow = "hidden";
      overlay.style.display = "block";
    });
  });

  overlay.addEventListener("click", () => {
    modalBlock.forEach((el) => {
      el.classList.remove("active");
    });

    overlay.style.display = "none";
    document.body.style.overflow = "auto";
  });

  document.addEventListener("keydown", (e) => {
    if (e.key == "Escape") {
      modalBlock.forEach((el) => {
        el.classList.remove("active");
      });

      overlay.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});
