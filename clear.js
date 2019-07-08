$(document).ready(function () {
    $( ".hideB" ).click(function(){
        $( ".content" ).slideToggle();
    });
});

function clean() {
    document.getElementById('choice').value = '';
 }
// function cancel () {
//        // var y = document.execCommand("undo");
//        var  z = document.getElementById('choice');
//      if (z.value = 'Благоприятный, трансцендентальный') {
//          z.value = '';
//      }
//             z.value = 'Благоприятный, трансцендентальный';
//
// }
var arr = ["", "Моноблок","Благоприятный, трансцендентальный"];
function reset() {
    var i = document.getElementById('input1');
    var k = document.getElementById('monoblock');
    var c = document.getElementById('choice');
    i.value = arr[0];
    k.value = arr[1];
    c.value = arr[2];
}

