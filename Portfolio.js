function toggleCode(button) {
    const codeBox = button.nextElementSibling;
    const isVisible = codeBox.style.display === "block";
    codeBox.style.display = isVisible ? "none" : "block";
    button.textContent = isVisible ? "View Code" : "Hide Code";
  }