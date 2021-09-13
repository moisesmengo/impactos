function slides(item) {
  document.addEventListener("DOMContentLoaded", function () {
    new Splide(item, {
      perPage: 4,
      height: "230px",
      cover: true,
      breakpoints: {
        900: {
          perPage: 2,
        },
        500: {
          perPage: 1,
        },
      },
      gap: 20,
      rewind: true,
      cover: true,
      heightRatio: 0.5,
      autoplay: true,
      type: "loop",
      pauseOnHover: false,
      focus: "center",
      pauseOnFocus: false,
    }).mount();
  });
}
slides("#image-slider");
slides("#image-slider2");
slides("#image-slider3");
