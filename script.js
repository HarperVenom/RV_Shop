//Toggle menu button
document.body.addEventListener("click", function (event) {
  if (event.target && event.target.id === "button-menu") {
    let menu = document.getElementById("menu");
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
    } else {
      menu.classList.add("active");
    }
  }
});

//Prevet the image from stretching on page reload
/*window.addEventListener("load", () => {
  let image = document.getElementById("header-image");
  image.style.width = "100%";
  image.style.height = "auto";
});*/
