fetch("/header-nav-bar.html")
  .then((res) => res.text())
  .then((text) => {
    let placeHolder = document.getElementById("header-script");
    let replacement = document.createElement("div");
    replacement.innerHTML = text;
    placeHolder.replaceWith(replacement);

    document.body.style.display = "flex";
    setActive();
  });

function setActive() {
  let menuButtons = document.getElementsByClassName("page-button");
  Array.from(menuButtons).forEach((button) => {
    if (button.getAttribute("href") == window.location.pathname) {
      button.classList.add("active");
    }
  });
}
