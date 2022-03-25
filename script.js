window.onload = function (ev) {
  let landing = document.getElementById("landing");
  setTimeout(function () {
    landing.style.zIndex = 1;
  }, 2000); // TODO: change it to 2000
};

let anchorTags = document.querySelectorAll("a");
anchorTags.forEach((a) => {
  if (a.getAttribute("href").match(/#*/)) {
    // do nothing
  } else a.setAttribute("target", "_blank");
});
