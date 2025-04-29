document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('message').textContent = "Το μήνυμά σας εστάλη επιτυχώς!";
    this.reset();
  });
  function toggleMenu() {
    const nav = document.getElementById("main-nav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
  }
  document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const dropdownToggle = dropdown.querySelector('a'); // Ο σύνδεσμος που ενεργοποιεί το dropdown
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        dropdownToggle.addEventListener('click', function(event) {
            // Ελέγξτε αν η οθόνη είναι mobile (μπορείτε να χρησιμοποιήσετε το ίδιο breakpoint με το CSS)
            if (window.innerWidth < 768) { // Χρησιμοποιήστε το ίδιο breakpoint
                event.preventDefault(); // Αποτροπή της προεπιλεγμένης ενέργειας του συνδέσμου (πλοήγηση)
                dropdownContent.classList.toggle('show');

                // Προαιρετικό: Κλείσιμο άλλων ανοιχτών dropdowns
                dropdowns.forEach(otherDropdown => {
                    if (otherDropdown !== dropdown) {
                        otherDropdown.querySelector('.dropdown-content').classList.remove('show');
                    }
                });
            }
            // Σε desktop, αφήστε το default behavior (hover ή click για πλοήγηση αν δεν υπάρχει hover)
        });

         // Προαιρετικό: Κλείσιμο dropdown όταν κάνετε κλικ οπουδήποτε αλλού στην οθόνη
        document.addEventListener('click', function(event) {
            if (!dropdown.contains(event.target)) {
                dropdownContent.classList.remove('show');
            }
        });
    });
});
