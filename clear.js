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
    var i = document.getElementById('input1');
    var k = document.getElementById('monoblock');
    var c = document.getElementById('input-form-down center');
    i.value = arr[0];
    k.value = arr[1];
    c.value = arr[2];
}

