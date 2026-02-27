function initInquiry() {
  const box = document.querySelector(".box-subject-dropdown");
  const subjectDropdown = document.querySelector(".subject-dropdown");
  const options = document.querySelectorAll(".option");
  const placeholder = document.querySelector(".subject-placeholder");

  if (!box || !subjectDropdown) return;

  subjectDropdown.addEventListener("click", (e) => {
    e.stopPropagation();
    box.classList.toggle("active");
  });

  options.forEach((option) => {
    option.addEventListener("click", (e) => {
      e.stopPropagation();
      placeholder.textContent = option.textContent;
      box.classList.remove("active");
    });
  });

  document.addEventListener("click", (e) => {
    if (!box.contains(e.target)) {
      box.classList.remove("active");
    }
  });
}
