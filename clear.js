$(document).ready(function () {
    $( ".hideB" ).click(function(){
        $( ".content" ).slideToggle();
    });
});

function clean() {
    document.getElementById('choice').value = '';
 }
function cancel () {
    var y = document.execCommand("undo");
    // var x = document.getElementById("found");
    // if (x.style.display === "block") {
    //     x.style.display = "none";
    // } else {
    //     x.style.display = "block";
    // }
}
