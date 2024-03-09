document
  .getElementsByTagName("nav")[0]
  .addEventListener("click", function (event) {
    if (event.target && event.target.id === "button-menu") {
      let menu = document.getElementById("menu");
      if (menu.classList.contains("active")) {
        menu.classList.remove("active");
      } else {
        menu.classList.add("active");
      }
    }
  });
