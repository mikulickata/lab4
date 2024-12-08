document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {
        alert("Molimo popunite sva polja.");
    } else {
        alert("Hvala na poruci!");
        e.target.reset();
    }
});
