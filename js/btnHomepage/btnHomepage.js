function initBtnHomepage() {
  const btn = document.querySelector(".btn-homepage button");

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
    });
  });
}
