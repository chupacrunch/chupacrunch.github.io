document.addEventListener("DOMContentLoaded", () => {
    const roles = ["UI/UX Designer", "Graphic Designer"];
    let index = 0;
    const roleDiv = document.querySelector(".animated-role");
  
    setInterval(() => {
      roleDiv.style.opacity = 0;
  
      setTimeout(() => {
        index = (index + 1) % roles.length;
        roleDiv.textContent = roles[index];
        roleDiv.style.opacity = 1;
      }, 500); // Wait for fade-out transition to finish
    }, 2500);
  });
  