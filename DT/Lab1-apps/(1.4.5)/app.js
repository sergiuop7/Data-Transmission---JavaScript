var result = 0;

$("#plus").on('click', sum);
$("#min").on('click', diff);
$("#div").on('click', division);
$("#prod").on('click', product);
$('#equal').on('click', printValue);

function sum() {
    var firstNumberText = $('#firstNumber').val();
    var secondNumberText = $('#secondNumber').val();
    var firstNumber = parseInt(firstNumberText);
    var secondNumber = parseInt(secondNumberText);
    result = firstNumber + secondNumber;
}
function diff() {
    var firstNumberText = $('#firstNumber').val();
    var secondNumberText = $('#secondNumber').val();
    var firstNumber = parseInt(firstNumberText);
    var secondNumber = parseInt(secondNumberText);
    result = firstNumber - secondNumber;
}
function division() {
    var firstNumberText = $('#firstNumber').val();
    var secondNumberText = $('#secondNumber').val();
    var firstNumber = parseInt(firstNumberText);
    var secondNumber = parseInt(secondNumberText);
    result = firstNumber / secondNumber;
}
function product() {
    var firstNumberText = $('#firstNumber').val();
    var secondNumberText = $('#secondNumber').val();
    var firstNumber = parseInt(firstNumberText);
    var secondNumber = parseInt(secondNumberText);
    result = firstNumber * secondNumber;
}

function printValue() {
    $("#result").html(result)
}
