let dialog = document.getElementById("dialog");
let shade = document.getElementById("shade");
let dialogTitle = document.getElementById("dialogTitle");
let dialogContent = document.getElementById("dialogContent");

function accept(id) {
    let request = document.getElementById(id);
    let li = request.parentNode;
    request.parentNode.removeChild(request);
    li.parentNode.removeChild(li);
    let connection = document.createElement("li");
    connection.appendChild(request);
    document.getElementById("connections").appendChild(connection);
}
function reject(id) {
    let request = document.getElementById(id);
    request.parentNode.parentNode.removeChild(request.parentNode);
}

function showDialog(description) {
    dialogTitle.innerText = description.title;
    dialogContent.innerText = description.content;
    dialog.style.display = "block";
    shade.style.display = "block";
}
function closeDialog() {
    dialog.style.display = "none";
    shade.style.display = "none";
}
