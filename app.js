$(document).ready(function(){

var box = $('.box');
var reset = $('#reset');
var undo = $('#undo');
var green = $('#green');
var red = $('#red');
var blue = $('#blue');
var white = $('#white');
var yellow = $('#yellow');
var colors = 'red green blue yellow white';

var selectedColor = 'black';

box.on('click', function(){
    $(this).addClass(selectedColor);
})

box.on('dblclick', function(){
    $(this).removeClass(selectedColor);
})

reset.on('click', function(){
    box.removeClass(colors);
})

undo.on('click', function(){
    box.removeClass(selectedColor);
})

green.on('click', function(){
    selectedColor = 'green';
})

red.on('click', function(){
    selectedColor = 'red';
})

blue.on('click', function(){
    selectedColor = 'blue';
})

yellow.on('click', function(){
    selectedColor = 'yellow';
})

white.on('click', function(){
    selectedColor = 'white';
})






})