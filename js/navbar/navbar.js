function initNavbar() {
  const hamburger = document.querySelector(".hamburger");
  const icon = document.getElementById("hamburger-icon");
  const dropdown = document.getElementById("mobile-dropdown");
  const navLeftMobile = document.getElementById("nav-left-mb");
  const navLeftDesktop = document.getElementById("nav-left-desktop");
  const logo = document.getElementById("logo");
  const editorial = document.getElementById("editorial-mb");
  const editorialDropdown = document.getElementById("editorial-dropdown-mb");

  navLeftMobile.addEventListener("click", (e) => {
    navLeftMobile.classList.toggle("active");
  });

  navLeftDesktop.addEventListener("click", (e) => {
    navLeftDesktop.classList.toggle("active");
  });

  editorial.addEventListener("click", (e) => {
    editorial.classList.toggle("active");
    editorialDropdown.classList.toggle("active");
    editorialDropdown.classList.toggle("hidden");
  });

  hamburger.addEventListener("click", () => {
    if (icon.src.includes("Hamburger.svg")) {
      icon.src = "assets/icons/Close.svg";
      dropdown.classList.remove("hidden");
      navLeftMobile.classList.remove("active");
      logo.classList.add("top-logo");
      editorial.classList.remove("active");
      editorialDropdown.classList.remove("active");
    } else {
      icon.src = "assets/icons/Hamburger.svg";
      dropdown.classList.add("hidden");
      logo.classList.remove("top-logo");
    }
  });
}
