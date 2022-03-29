window.onload = function (ev) {
  let landing = document.getElementById("landing");
  setTimeout(function () {
    landing.style.zIndex = 1;
  }, 800);
};

let anchorTags = document.querySelectorAll("a");
anchorTags.forEach((a) => {
  if (a.getAttribute("href").match(/^#/)) {
    // do nothing
  } else a.setAttribute("target", "_blank");
});

let portfolio = document.getElementById("portfolio");
let hamburger = document.getElementById("hamburger");
let navbar = document.querySelector("nav");
hamburger.addEventListener("click", function () {
  navbar.classList.toggle("open");
});

navbar.addEventListener("click", function (ev) {
  if (!ev.target.matches("summary")) {
    navbar.classList.remove("open");
  }
});

let navIndex = navbar.querySelector("ul");
let allH2s = portfolio.querySelectorAll("h2");
allH2s.forEach((h2) => {
  h2.style.borderLeft = 'lightgray 1px solid';
  h2.style.paddingLeft = "5px";
  let h2List = document.createElement("li");
  let h2Detail = document.createElement("details");
  let h2Summary = document.createElement("summary");
  let h2a = document.createElement("a");
  h2a.textContent = h2.textContent;
  h2a.setAttribute("href", `#${h2.getAttribute("id")}`);
  h2Summary.appendChild(h2a);
  h2Detail.appendChild(h2Summary);
  // h2List.appendChild(h2Detail);
  let nextEle = h2.nextElementSibling;
  let h3s = [];
  while (!!nextEle && !nextEle.matches("h2")) {
    if (nextEle.matches("h3")) h3s.push(nextEle);
    nextEle = nextEle.nextElementSibling;
  }
  if (h3s.length > 0) {
    let h3Ul = document.createElement("ul");
    h3s.forEach((h3) => {
      let h3List = document.createElement("li");
      let h3a = document.createElement("a");
      h3a.textContent = h3.textContent;
      h3a.setAttribute("href", `#${h3.getAttribute("id")}`);
      h3List.appendChild(h3a);
      h3Ul.appendChild(h3List);
    });
    h2Detail.appendChild(h3Ul);
  }
  h2List.appendChild(h2Detail);
  navIndex.appendChild(h2List);
});
