$(document).ready(function () {

    $(".hide-content").click(function () {

        $(this).closest(".cap").siblings(".content").slideToggle();

    });

    $(".close").click(function (){

        $(this).closest(".cap").parent().css('display','none');

    });

    $("#crops").click(function () {

        $("#select-file").click();

    })
});

function cleanRectangle() {
    document.getElementById('input-form-down-rectangle').value = '';
}

var arr = [ "",
            "Моноблок",
            "Благоприятный, трансцендентальный"];
function resetRectangle() {

    var fillingInput = document.getElementById('input-form-up-rectangle');
    var formFactor = document.getElementById('formFactor-rectangle');
    var exodusField = document.getElementById('input-form-down-rectangle');

    if (document.getElementById('yes')) {
        fillingInput.value = arr[0];
        formFactor.value= arr[1];
        exodusField.value = arr[2];
        document.getElementById('confirm').display="none";
     }
     else {
        document.getElementById('no');
        document.getElementById('confirm').display="none";
     }
}
function transfer() {
   document.getElementById('filling-field-square').innerHTML = document.getElementById('input-form-up-rectangle').value;
   document.getElementById('formFactor-field-square').innerHTML = document.getElementById('formFactor-rectangle').value;
   document.getElementById('exodus-field-square').innerHTML = document.getElementById('input-form-down-rectangle').value;
}
function cleanSquare() {
    document.getElementById('exodus-field-square').innerHTML = arr[0];
    document.getElementById('formFactor-field-square').innerHTML = arr[0];
    document.getElementById('filling-field-square').innerHTML = arr[0];
}
