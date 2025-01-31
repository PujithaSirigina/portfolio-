// Function to Open Modal
function openModal(title, content) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-text").innerText = content;
    document.getElementById("modal").style.display = "block";
}

// Function to Close Modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Close Modal if Clicking Outside Content
window.onclick = function(event) {
    let modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
