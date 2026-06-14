document.addEventListener("DOMContentLoaded", () => {
    
    // Logik für die Header-Navigation
    const navButtons = document.querySelectorAll(".btn-nav");
    navButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const page = e.target.getAttribute("data-page");
            console.log(`Navigiere zu Seite: ${page}`);
            // Hier kannst du später echten Code einbauen (z.B. Seiten wechseln)
        });
    });

    // Logik für die Footer-Buttons
    const footerButtons = document.querySelectorAll(".btn-footer");
    footerButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const linkType = e.target.getAttribute("data-link");
            console.log(`Footer-Link geklickt: ${linkType}`);
            // Beispiel: alert(`Du öffnest jetzt ${linkType}`);
        });
    });

});
