$(".chip-container").slick({
  infinite: true,
  slidesToShow: 10,
  slidesToScroll: 3,
  arrows: true,
  variableWidth: true,
  prevArrow: `<div><svg style="height: 24px; flex-shrink: 0; cursor: pointer; margin-right: 5px;" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g mirror-in-rtl="" class="style-scope yt-icon"><path d="M14.6,18.4L8.3,12l6.4-6.4l0.7,0.7L9.7,12l5.6,5.6L14.6,18.4z" class="style-scope yt-icon"></path></g></svg></div>`,
  nextArrow: `<div><svg style="height: 24px; flex-shrink: 0; cursor: pointer; margin-left: 5px;" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g mirror-in-rtl="" class="style-scope yt-icon"><path d="M9.4,18.4l-0.7-0.7l5.6-5.6L8.6,6.4l0.7-0.7l6.4,6.4L9.4,18.4z" class="style-scope yt-icon"></path></g></svg></div>`,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     // You can unslick at a given breakpoint now by adding:
  //     // settings: "unslick"
  //     // instead of a settings object
  //   ],
});

const menu = document.getElementById("menu");
const sidebar = document.getElementById("sidebar");
const pageContent = document.getElementById("page-content");

console.log("hasSideBar: ", sidebar.classList.contains("show__sidebar"));
// check class
menu.addEventListener("click", () => {
  if (sidebar.classList.contains("show__sidebar") === true) {
    sidebar.classList.remove("show__sidebar");
    document.getElementById("page-content").style.marginLeft = "256px";
    return;
  } else {
    sidebar.classList.add("show__sidebar");
    document.getElementById("page-content").style.marginLeft = "0";
  }
});
