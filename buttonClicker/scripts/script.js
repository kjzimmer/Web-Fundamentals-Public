let winner = new Audio("audio/success-fanfare-trumpets-6185.mp3");

function logInOut(e) {
    if (e.target.innerHTML == "Login") {
        e.target.innerHTML = "Logout";
    } else {
        e.target.innerHTML = "Login";
    }
}

function addDefinition(e) {
    e.target.parentNode.removeChild(e.target);
}

function likeMe(e) {
    let button = e.target;
    if (button.likes === undefined) {
        button.likes = 0;
    }

    button.innerHTML = `${++button.likes} likes`;
    winner.play();

    alert("Ninja was liked!");
    return;
}
