var btnDecrease = document.getElementById('btn-decrease');
var btnIncrease = document.getElementById('btn-increase');
var textFont = document.getElementById('mainHeading');


var initialFontSize = window.getComputedStyle(textFont).fontSize;

initialFontSize = parseInt(initialFontSize.substr(0, (initialFontSize.length -2))) 

btnIncrease.addEventListener('click', function(){

    initialFontSize += 10

    textFont.style.fontSize = (initialFontSize +10 + 'px')
    
})

btnDecrease.addEventListener('click', function(){

    initialFontSize -= 10

    textFont.style.fontSize = (initialFontSize -10 + 'px')
    
})

