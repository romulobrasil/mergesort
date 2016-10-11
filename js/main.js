// Variable
var array  = [];
var number = document.getElementById("number");

// Variable Markup
var printArray = document.getElementById("prtArray");
var prtResult  = document.getElementById("prtResult");
var prtConsole = document.getElementById("prtConsole");

// Variable Bottons 
var btnArray = document.getElementById("btnArray");
var btnMerge = document.getElementById("btnMerge");
var btnReset = document.getElementById("btnReset");

btnArray.addEventListener("click", function(){
    getNumber();
});

number.addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        getNumber();
    }
});

function getNumber() {
    if (number.value === '') {
        alert('Campo Vazio');
    } else if (isNaN(parseInt(number.value))) {
        alert('Caractere não é um número');
    } else {
        array.push(parseInt(number.value));   
    }

    printArray.innerHTML = '{ ' + array + ' }';
    number.value = '';
    number.focus();  
}

btnMerge.addEventListener("click", function() {
    if (array.length > 0) {
        prtResult.innerHTML = '{ ' + Mergesort.sort(array) + ' }';
        document.body.classList = 'active';
    } else {
        alert('Array vazio, favor adicionar os números');
    }
});

btnReset.addEventListener("click", function(){
    document.body.classList.remove('active');
    printArray.innerHTML = '{  }';
    prtResult.innerHTML  = '';
    prtConsole.innerHTML = '';
    array = [];
});