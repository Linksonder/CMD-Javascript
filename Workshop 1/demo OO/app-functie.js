"use strict";

//var



function Juffe()
{

    let counter = 0;

    const label = document.createElement('h3');
    label.innerText = 0;
    const button = document.createElement('button');
    button.innerText = "Clik me!";

    document.querySelector('body').append(label);
    document.querySelector('body').append(button);

    
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

  
}

Juffe();
Juffe();

//PSEUDO CODE
//getal
//button <- HTML
//button click
//getal verhogen