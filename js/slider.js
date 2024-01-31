$(".slider").slick({
  arrows: false,
  dots: false,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 820,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
$(".slider3").slick({
  arrows: false,
  dots: true,
  slidesToShow: 1,
});
