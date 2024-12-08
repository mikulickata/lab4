document.addEventListener("DOMContentLoaded", () => {
    const aboutSection = document.getElementById("about");
    const newContent = document.createElement("p");
    newContent.textContent = "HTTP/2 nudi značajno poboljšanje performansi u odnosu na HTTP/1.x.";
    aboutSection.appendChild(newContent);
});
