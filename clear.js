function clean() {
    document.getElementById('choice').value = ''
 }

function hide() {
    var x = document.getElementById("found");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}