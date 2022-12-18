
let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = "";
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        if (buttonText == 'X' ) {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '←') {
            screenValue = screenValue.substring(0,screenValue.length-1);
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            try {
              screen.value = eval(screenValue);
              screenValue=screen.value;
            } 
            catch (error) {
               screen.value="Syntax error!";
               screenValue="";
            }
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    });
}

