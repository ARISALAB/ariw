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
document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth <= 768) {
        const dropdownLinks = document.querySelectorAll('.dropdown-toggle');
        dropdownLinks.forEach(link => {
            let tapped = false;

            link.addEventListener('click', function (e) {
                const parent = link.parentElement;
                const dropdown = parent.querySelector('.dropdown-content');

                if (!tapped) {
                    e.preventDefault();
                    // Κλείσε όλα τα άλλα dropdowns
                    document.querySelectorAll('.dropdown-content').forEach(el => {
                        if (el !== dropdown) el.style.display = 'none';
                    });
                    dropdown.style.display = 'block';
                    tapped = true;

                    // Επαναφορά μετά από λίγο
                    setTimeout(() => tapped = false, 1500);
                }
                // Αν ξαναπατηθεί σύντομα, ακολούθησε το href
            });
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const isMobile = window.innerWidth <= 768; // προσαρμόζεται αν χρειάζεται

    if (isMobile) {
        const dropdownLinks = document.querySelectorAll('.dropdown-toggle');

        dropdownLinks.forEach(link => {
            let firstTap = false;

            link.addEventListener('click', function (e) {
                const dropdown = this.parentElement.querySelector('.dropdown-content');

                if (!firstTap) {
                    e.preventDefault();
                    // Κλείσε άλλα dropdown
                    document.querySelectorAll('.dropdown-content').forEach(menu => {
                        if (menu !== dropdown) menu.style.display = 'none';
                    });

                    dropdown.style.display = 'block';
                    firstTap = true;

                    // Επαναφορά tap μετά από λίγο (ώστε να μπορεί να ξαναγίνει 2ο tap)
                    setTimeout(() => { firstTap = false }, 1500);
                } else {
                    // 2ο tap -> ακολούθησε το href
                    window.location.href = this.getAttribute('href');
                }
            });
        });

        // Αν πατηθεί αλλού, κλείσε dropdowns
        document.addEventListener('click', function (e) {
            if (!e.target.closest('.dropdown')) {
                document.querySelectorAll('.dropdown-content').forEach(menu => {
                    menu.style.display = 'none';
                });
            }
        });
    }
});
