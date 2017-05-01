require('../css/demo.css')
var $Div = document.getElementById('div1');
var timer = null;
var lastX = 0;
var lastY = 0;
var iSpeedX = 0;
var iSpeedY = 0;
$Div.onmousedown = function (e) {
    clearInterval(timer);
    var event = event || e;
    var disX = event.clientX - this.offsetLeft;
    var disY = event.clientY - this.offsetTop;
    document.onmousemove = function (e) {
        var event = event || e;
        var newL = event.clientX - disX;
        var newT= event.clientY - disY;                
        
        iSpeedX = newL - lastX;
        iSpeedY = newT - lastY;                
        lastX = newL;
        lastY = newT;                                             
        $Div.style.left = newL + 'px';
        $Div.style.top = newT + 'px';
    }
    document.onmouseup = function () {
        document.onmousemove = null;
        document.onmouseup = null;
        autoMove();
    }
}

function autoMove() {
    clearInterval(timer);
    var g = 5;          
    timer = setInterval(function () {
        iSpeedY += g;
        var left = $Div.offsetLeft + iSpeedX;
        var top = $Div.offsetTop + iSpeedY;
        if (top > document.documentElement.clientHeight - $Div.offsetHeight) {
            iSpeedY *= -1;
            iSpeedY *= 0.8;
            iSpeedX *= 0.8;
            top = document.documentElement.clientHeight - $Div.offsetHeight
        } else if (top <= 0){
            iSpeedY *= -1;
            iSpeedX *= 0.8;
            top = 0;
        }
        if (left > document.documentElement.clientWidth - $Div.offsetWidth) {
            iSpeedX *= -1;
            iSpeedX *= 0.8;
            left = document.documentElement.clientWidth - $Div.offsetWidth;
        }else if (left <= 0 ) {
            iSpeedX *= -1;
            iSpeedX *= 0.8;
            left = 0;
        }
        if (Math.abs(iSpeedX) < 1) {
            iSpeedX = 0;
        }
        if (Math.abs(iSpeedY) < 1) {
            iSpeedY = 0;
        }               
        
        if (iSpeedX === 0 && iSpeedY === 0 && $Div.offsetTop === document.documentElement.clientHeight - $Div.offsetHeight) {
            clearInterval(timer);
        }
        $Div.style.left = left + 'px';
        $Div.style.top = top + 'px';   

    },30);
}        
        
