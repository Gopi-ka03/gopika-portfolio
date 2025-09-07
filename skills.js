document.addEventListener("DOMContentLoaded", () => {
  const skills = document.querySelectorAll(".skill-level");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.level;
      }
    });
  }, { threshold: 0.5 });

  skills.forEach(skill => {
    observer.observe(skill);
  });
});
