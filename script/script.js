document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.overflow = "hidden";
    document.querySelector(".loading").style.visibility = "visible";
  } else {
    $(".loading").fadeOut();
    document.querySelector("body").style.overflow = "visible";
  }
};

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});

$("nav button").click(function () {
  let val = $(this).attr("value");
  if (val == 0) {
    $("nav button").attr("value", "1");
    $(this).css("background", "#00c4cc");
  } else {
    $("nav button").attr("value", "0");
    $(this).css("background", "#00c4cc00");
  }

  $(".menu").slideToggle();
});

$("nav button").blur(function () {
  $("nav button").attr("value", "0");
  $(this).css("background", "#00c4cc00");

  setTimeout(function () {
    $(".menu").slideUp();
  }, 400);
});

$("input").focus(function () {
  $(this).css("border", "solid 1px #00c4cc");
});
$("input").blur(function () {
  $(this).css("border", "none");
});
