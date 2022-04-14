"use strict";

//var


class Juffen
{
    counter;
    label;
    button;

    constructor()
    {
        this.counter = 0;
        this.label = document.createElement('h3');
        this.label.innerText = 0;
        this.button = document.createElement('button');
        this.button.innerText = "Clik me!";
    
        document.querySelector('body').append(this.label);
        document.querySelector('body').append(this.button);
        
        this.button.addEventListener('click', () => {
            this.Count();
        })
    }
  

    Count()
    {
        this.counter++;
        console.log(this.counter);

        if(this.isDividableBySeven() || this.containsTheNumberSeven())
        {
            this.label.innerText = "JUF";
        }
        else 
        {
            this.label.innerText = this.counter;
        }
    }

    isDividableBySeven()
    {
        return this.counter % 7 == 0;
    }

    containsTheNumberSeven(value)
    {
        return (this.counter + "").includes('7');
    }

    stop()
    {
        this.label.innerText = "GAME OVER";
    }

}

//MAG NIET
//Juffen.stop();


let juffen1 = new Juffen();
let juffen2 = new Juffen();

setTimeout(() => {
    juffen1.stop();
    juffen2.stop();
}, 2000)