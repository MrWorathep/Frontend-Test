function initFAQ() {
  const container = document.querySelector(".faq-container");
  const activeButtons = document.querySelectorAll(".faq-btn");

  function renderByIndex(index) {
    const category = faqCategories[index];
    if (!category) return;

    container.innerHTML = "";

    category.data.forEach((item, i) => {
      container.innerHTML += `
        <div class="cursor-box-accordion cursor-pointer ${i === 0 ? "active" : ""}">
          <div class="box-accordion">
            <h2>${item.question}</h2>
            <img class="arrow" src="assets/icons/icon-arrow.svg" alt="arrow" />
          </div>
          ${
            item.answer && item.answer.trim() !== ""
              ? `
              <div class="text-accordion">
                <span>${item.answer}</span>
              </div>
            `
              : ""
          }
        </div>
      `;
    });

    accordionLogic();
  }

  function accordionLogic() {
    const accordions = document.querySelectorAll(".cursor-box-accordion");

    accordions.forEach((accordion) => {
      const textBox = accordion.querySelector(".text-accordion");
      if (!textBox) return;

      accordion.addEventListener("click", () => {
        accordion.classList.toggle("active");
      });
    });
  }

  activeButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      renderByIndex(index);
      activeButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
    });
  });

  renderByIndex(1);
  activeButtons[1]?.classList.add("active");
}
