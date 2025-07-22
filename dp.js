document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggleMode");
  const toggleBtnMobile = document.getElementById("toggleModeMobile");
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");

  // ====== DARK MODE FUNCTION ======
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");

    const isDark = document.body.classList.contains("dark-mode");

    if (toggleBtn) toggleBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    if (toggleBtnMobile) toggleBtnMobile.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
  }

  // Event listeners for dark mode toggle (desktop + mobile)
  if (toggleBtn) toggleBtn.addEventListener("click", toggleDarkMode);
  if (toggleBtnMobile) toggleBtnMobile.addEventListener("click", toggleDarkMode);

  // ====== SIDEBAR TOGGLE ======
  if (hamburger && sidebar) {
    hamburger.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });

    // Close sidebar on any link click
    const sidebarLinks = sidebar.querySelectorAll("a");
    sidebarLinks.forEach(link => {
      link.addEventListener("click", () => {
        sidebar.classList.remove("active");
      });
    });

    // Close sidebar on dark mode toggle in sidebar
    if (toggleBtnMobile) {
      toggleBtnMobile.addEventListener("click", () => {
        sidebar.classList.remove("active");
      });
    }
  }
});
