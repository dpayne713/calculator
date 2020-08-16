(function() {


////////////////////////////////////////////////
// Declare variables ///////////////////////////
////////////////////////////////////////////////
let num0 =          document.querySelector('.num-0');
let num1 =          document.querySelector('.num-1');
let num2 =          document.querySelector('.num-2');
let num3 =          document.querySelector('.num-3');
let num4 =          document.querySelector('.num-4');
let num5 =          document.querySelector('.num-5');
let num6 =          document.querySelector('.num-6');
let num7 =          document.querySelector('.num-7');
let num8 =          document.querySelector('.num-8');
let num9 =          document.querySelector('.num-9');
let numSelectors =  [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9];
let dot =           document.querySelector('.dot');
let DOM = {
    selectors : {
        ac :        document.querySelector('.ac'),
        divide :    document.querySelector('.divide'),
        multiply :  document.querySelector('.multiply'),
        subtract :  document.querySelector('.subtract'),
        add :       document.querySelector('.add'), 
        equals :    document.querySelector('.equals'), 
        dot :       document.querySelector('.dot'), 
        display :   document.querySelector('.display'),
    }
};
let type = '';
let input = '';
let currentNumber = 0;
let lcd = DOM.selectors.display

/////////////////////////////////////////////////////////////////
// Create event listners for number buttons. / decimal button ///
/////////////////////////////////////////////////////////////////
for (let i=0; i<10; i++){
    numSelectors[i].addEventListener('click', function() {
                input += i; 
                lcd.value = input; 
        });
    addEventListener('keydown', function(event){
        if (event.keyCode === (48 + i)){
                input += i;
                lcd.value = input; 
        }
    });
};

dot.addEventListener('click', decimal)
addEventListener('keydown', function(event){
    if (event.keyCode === 190) { decimal(); };
});


  /////////////////////////////////////////////////
 // Create event listners for execution buttons///
/////////////////////////////////////////////////
DOM.selectors.ac.addEventListener('click', ac)
addEventListener('keydown', function(event){
    if (event.keyCode === 12|| event.keyCode === 8) { ac(); }
});
DOM.selectors.add.addEventListener('click', add); 
addEventListener('keydown', function(event){
    if (event.keyCode === 107) { add(); }
});
DOM.selectors.subtract.addEventListener('click', subtract);
addEventListener('keydown', function(event){
    if (event.keyCode === 109) { subtract(); }
});
DOM.selectors.multiply.addEventListener('click', multiply);
addEventListener('keydown', function(event){
    if (event.keyCode === 106) { multiply(); }
});

DOM.selectors.divide.addEventListener('click', divide);
addEventListener('keydown', function(event){
    if (event.keyCode === 111) { divide(); }
});

DOM.selectors.equals.addEventListener('click', equals);
addEventListener('keydown', function(event){
    if (event.keyCode === 13) { equals(); }
});


////////////////////////////////////////////////
//// Callable functions ////////////////////////
////////////////////////////////////////////////
function add() {
    type = 'add'
    if (currentNumber === 0) {
        currentNumber = parseFloat(lcd.value);
        input = '';
        lcd.value = '';
    } else {
        currentNumber += parseFloat(lcd.value);
        input = '';
        lcd.value = currentNumber; 
    }
};

function subtract() {
    //if curent value is zero and display is zero 
    if (lcd.value === '') {
        input = '-';
        lcd.value = input; 
    //if current value is zero and display is already '-'
    } else if (lcd.value === '-'){
        //do nothing
    //if current value is not zero && subtract not yet selected
    } else if (parseFloat(lcd.value) !== 0 && type !== 'subtract') {
        currentNumber = parseFloat(lcd.value); 
        input = ''; 
        lcd.value = input; 
    //if current value is not zero && subtract HAS been selected previous
    } else if (currentNumber !== 0 && type === 'subtract') { 
        currentNumber -= parseFloat(lcd.value); 
        lcd.value = currentNumber;  
        input = '';
    }
    type = 'subtract';
};

function multiply() {
    // if current number is NOT zero 
    if (lcd.value !== 0 && type !== 'multiply'){
        currentNumber = parseFloat(lcd.value); 
        input = '';
        lcd.value = input; 
    } else if (currentNumber !== 0 && type === 'multiply') {
        currentNumber *= parseFloat(lcd.value) 
        lcd.value = currentNumber;  
        input = '';
    } else if (parseInt(lcd.value) === 0) {
        currentNumber *= parseInt(lcd.value); 
        lcd.value = currentNumber; 
        input = '';
    }
    type = 'multiply';
};

function divide() {
    // if current number is NOT zero 
    if (lcd.value !== 0 && type !== 'divide'){
        currentNumber = parseFloat(lcd.value); 
        input = '';
        lcd.value = input; 
    } else if (currentNumber !== 0 && type === 'divide') {
        currentNumber /= parseFloat(lcd.value) 
        lcd.value = currentNumber;  
        input = '';
    } 
    type = 'divide';
};

function equals() {
    if (type === 'add') {
        currentNumber += parseFloat(lcd.value);
        lcd.value = currentNumber;
    } else if (type === 'subtract') {
        let num = parseFloat(lcd.value);
        currentNumber -= num; 
        lcd.value = currentNumber;  
    } else if (type === 'multiply') {
        currentNumber *= parseFloat(lcd.value) 
        lcd.value = currentNumber;  
    } else if (currentNumber !== 0 && type === 'divide') {
        currentNumber /= parseFloat(lcd.value) 
        lcd.value = currentNumber;  
        input = '';
    } 
    input = '';
    type = '';
}

function ac() {
    input = ''; 
    type = ''; 
    lcd.value = input; 
    currentNumber = 0; 
}

function decimal() {
    input += '.'
    lcd.value = input; 
}

})(); 