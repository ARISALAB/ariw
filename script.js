document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('message').textContent = "Το μήνυμά σας εστάλη επιτυχώς!";
    this.reset();
  });
  function toggleMenu() {
    const nav = document.getElementById("main-nav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  }
  