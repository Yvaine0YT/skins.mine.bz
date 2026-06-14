document.addEventListener("DOMContentLoaded", () => {
    
    // Logik für die Header-Navigation (Skins, Order, etc.)
    const navButtons = document.querySelectorAll(".btn-nav");
    navButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const page = e.target.getAttribute("data-page");
            console.log(`Navigiere zu Seite: ${page}`);
            
            // Beispielhaft für den Login-Button:
            if (page === "login") {
                window.location.href = "login.html"; 
            }
        });
    });

    // Logik für die Footer-Buttons (Socials, Donate, Impressum)
    const footerButtons = document.querySelectorAll(".btn-footer");
    footerButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const linkType = e.target.getAttribute("data-link");

            switch (linkType) {
                case "youtube":
                    window.open("https://www.youtube.com/@Yvaine_Main", "_blank");
                    break;
                case "tiktok":
                    window.open("https://www.tiktok.com/@DEIN_PROFIL", "_blank");
                    break;
                case "discord":
                    window.open("https://discord.gg/DEIN_INVITE_LINK", "_blank");
                    break;
                default:
                    console.log("Unbekannter Link geklickt");
            }
        });
    });

});
