function showWelcome() {
    alert("Welcome to Christian Andrie G. Asne's Resume!");
}

function toggleSkills() {
    var skills = document.getElementById("skills");

    if (skills.style.display === "none") {
        skills.style.display = "block";
    } else {
        skills.style.display = "none";
    }
}

function showDate() {
    var date = new Date();
    document.getElementById("date").innerHTML = date.toDateString();
}