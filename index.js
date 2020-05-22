let equals = document.querySelector(".equals");
let calScreen = document.querySelector(".screen");
let numbers = document.querySelectorAll(".number").length;
let num = document.querySelectorAll(".number")
let operator = document.querySelectorAll(".operator").length;
let clearScreen = document.querySelector(".clear");
let historyOuterContainer =document.querySelector(".boxHistory");

let isEqualsClicked = false;

let operands = [];
let operators =[];
let history = [];
let number;
let reducer;
let answer;

// function handler(){
//     calScreen.value += this.innerHTML;
//     if(number === undefined){
//         number="";
//     }
//     number += this.innerHTML;
// }



for(let i = 0;i<numbers;i++){
    //num[i].addEventListener("click",handler);
    num[i].addEventListener("click",function(){
        if(isEqualsClicked === true){
            calScreen.value ="";
            operands = [];
            operators = [];
        }
        
        calScreen.value += this.innerHTML;
        if(number === undefined){
            number="";
        }
        number += this.innerHTML;
        isEqualsClicked = false;
    });
}


for(let i = 0; i<operator;i++){
    document.querySelectorAll(".operator")[i].addEventListener("click",function(){
        //including equals sign
        operands.push(number);
        number = "";
        console.log(operands);
        calScreen.value += this.innerHTML;
        ///operands = [];
        operators.push(this.innerHTML);
        console.log("operator " + operators);

    });
}



// All operations
function addition(){
    reducer = (accumulator, currentValue) => parseFloat(accumulator) + parseFloat(currentValue);
    return answer = operands.reduce(reducer);
}

function substraction(){
    reducer = (accumulator, currentValue) => parseFloat(accumulator) - parseFloat(currentValue);
    return answer = operands.reduce(reducer);
}

function multiplication(){
    reducer = (accumulator, currentValue) => parseFloat(accumulator) * parseFloat(currentValue);
    return answer = operands.reduce(reducer);
}

function devide(){
    reducer = (accumulator, currentValue) => parseFloat(accumulator) / parseFloat(currentValue);
    return answer = operands.reduce(reducer);
}

equals.addEventListener("click",function(event){
    for(let i = 0;i < operators.length;i++){
        
        if(operators[i]==="+"){
            answer = addition();
        }else if(operators[i]==="-"){
            answer = substraction();
        }
        else if(operators[i]==="*"){
            answer = multiplication()
        }
        else if(operators[i]==="/"){
            answer = devide();
        }
    }

    calScreen.value += answer;
    history.push(calScreen.value);
    history.forEach(h=>{
        var historyContainer = document.createElement("div");  
        historyContainer.classList.add("history");
        var textnode = document.createTextNode(h);
        historyContainer.appendChild(textnode);
        historyOuterContainer.appendChild(historyContainer);
       
    });
    history = []; //empty the array
    isEqualsClicked = true;

});

clearScreen.addEventListener("click",function(){
    calScreen.value ="";
    operands = [];
    operators = [];
});


