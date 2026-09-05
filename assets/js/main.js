// Footer year
document.querySelectorAll("[data-year]").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Copy email to clipboard on click
document.querySelectorAll("[data-copy-email]").forEach((el) => {
  el.addEventListener("click", (e) => {
    const email = el.dataset.copyEmail;
    if (navigator.clipboard) {
      e.preventDefault();
      navigator.clipboard.writeText(email).then(() => {
        const original = el.querySelector("span").textContent;
        el.querySelector("span").textContent = "Copied!";
        setTimeout(() => {
          el.querySelector("span").textContent = original;
        }, 1500);
      });
    }
  });
});
