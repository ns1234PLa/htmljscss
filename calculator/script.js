function display(val) { 
    document.getElementById("result").value += val 
} 

function myfunction(event) { 
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3' 
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7' 
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-' 
        || event.key == '*' || event.key == '/') 
        document.getElementById("result").value += event.key; 
} 

var cal = document.getElementById("calculator"); 
cal.onkeyup = function (event) { 
    if (event.keyCode === 13) { 
        console.log("Enter"); 
        let x = document.getElementById("result").value 
        console.log(x); 
        solve(); 
    } 
} 


function solve() {
    const display = document.getElementById('result');
    try {
        display.value = math.evaluate(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function lastcleardisplay() {
    const display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
}

// Function that clear the display 
function allcleardisplay() { 
    document.getElementById("result").value = "" 
} 