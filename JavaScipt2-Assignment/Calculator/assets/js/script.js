let add = (first_number, second_number) =>  first_number + second_number;
let subtract = (first_number, second_number) =>  first_number - second_number;
let multiply = (first_number, second_number) =>  first_number * second_number;
let divide = (first_number, second_number) =>  first_number / second_number;

function operate(user_selection) {

    if(first_number == 0) {
        first_number = user_selection;
        document.getElementById("calculator-operation-display").textContent = `= ${first_number}`;
    }

    calculatorOperator("d");

    ///if(first_number != 0 && )

    // else if (second_number == 0)
    //     second_number = user_selection;
    // else
    //     console.log("");

        console.log(`FIRST: ${first_number}`);
        console.log(`SECOND: ${second_number}`);
        // console.log(`OP: ${}`);
}

function calculatorOperator(operatorValue) {

    if(operator === "") {
        console.log(`YES < ${operator} >`);
        operator
    }
    else
    console.log(`NO < ${operator} >`);
}

const button_number_1 = document.getElementById("button-number-1");
const button_number_1_Value = button_number_1.value;

const button_number_2 = document.getElementById("button-number-2");
const button_number_2_Value = button_number_2.value;

const button_number_3 = document.getElementById("button-number-3");
const button_number_3_Value = button_number_3.value;

const button_operation_add = document.getElementById("button-operation-add");
const button_operation_add_Value = button_operation_add.value;

const button_operation_subtract = document.getElementById("button-operation-subtract");
const button_operation_subtract_Value = button_operation_subtract.value;

button_number_1.addEventListener("click", function() { operate(button_number_1_Value)  } );

button_number_2.addEventListener("click",  function() { operate(button_number_2_Value) } );

button_number_3.addEventListener("click",  function() { operate(button_number_3_Value) } );

button_operation_add.addEventListener("click",  function() { calculatorOperator(button_operation_add_Value)  } );

button_operation_subtract.addEventListener("click",  function() { calculatorOperator(button_operation_subtract_Value)  } );

var first_number = 0;
var second_number = 0;
var operator = "";

console.log(`OP ${operator}`);
console.log( divide(5,5) );