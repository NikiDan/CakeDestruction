$(document).ready(function () {
    $( ".hide" ).click(function(){
        $( ".content" ).slideToggle();
    });
});

function clean() {
    document.getElementById('input-form-down center').value = '';
 }

var arr = ["", "Моноблок","Благоприятный, трансцендентальный"];
function reset() {
    var emptyFillingInput = document.getElementById('input1');
    var monoblock = document.getElementById('monoblock');
    var exodusField = document.getElementById('input-form-down');
    emptyFillingInput.value = arr[0];
    monoblock.value = arr[1];
    exodusField.value = arr[2];
}

