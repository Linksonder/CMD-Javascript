"use strict";

//var


let counter = 0;

const label = document.querySelector('h3');
const button = document.getElementById('btn');

//WRONG
//let result = Count();
//button.addEventListener('click', result)

//RIGHT
button.addEventListener('click', Count)


function Count()
{
    counter = counter + 1;
    console.log(counter);

    if(isDividableBySeven() || containsTheNumberSeven())
    {
        label.innerText = "JUF";
    }
    else 
    {
        label.innerText = counter;
    }
}

function isDividableBySeven()
{
    return counter % 7 == 0;
}

function containsTheNumberSeven(value)
{
    return (counter + "").includes('7');
}


//PSEUDO CODE
//getal
//button <- HTML
//button click
//getal verhogen