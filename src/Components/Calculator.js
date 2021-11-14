import React, { useState } from 'react';



function Calculator() {

    const [input, setInput] = useState([''])
    const [message,setMessage] = useState('')
    let stack = [];
    console.log(stack)
    let arr = [];
   // let operator = [];

    const compute = () => {
        if(input.length === 0){
            return setMessage('You did not enter antyhing!')
        }else{
            arr = input.toString().split(',');
        }



        /*
        for(var i = 0; i < arr.length; i++){
            if ( typeof (arr[i] === 'number') || arr[i] == '/' || arr[i] == '*' || arr[i] == '+' || arr[i] == '-'){
                
            }
        }*/
        
        
        
        console.log(arr)
        for(var i = 0; i < arr.length; i++){
            // converts string to number and push to stack 
            stack.push(parseFloat(arr[i]));
            // remove NaN from stack
            stack = stack.filter( value => !Number.isNaN(value));
         
    }
    
    console.log(stack.length)
    console.log(arr.length)

    if(stack.length * 2 === arr.length + 1){
        for(var j = 0; j < arr.length; j++) {
            if(arr[j] === "+" || arr[j] === '-' || arr[j] === '/' || arr[j] === '*' ){
                let b = stack.pop();
                let a = stack.pop();
             
                let oper = arr[j];
                switch (oper) {
                    case '+':
                        stack.push(b+a)
                        break;
                    case '-':
                        stack.push(b-a)
                        break;
                    case '/':
                        stack.push(b/a)
                        break;
                    case '*':
                        stack.push(b*a)
                        break;
                        default:
                }
                
        }
        console.log(stack)
       
        setInput(`${input} = ${stack}`)
        setMessage('')

        }    
    } else if(stack.length * 2 > arr.length + 1) {
        setMessage('Something went wrong! Check the number of operands!')
    } else {
        setMessage('Something went wrong! Check the number of operators!')
    }
     
   
}

    const clear = () => {
        setInput('');
        setMessage('')
    }

 return (
        <div className='main-div'>
            <h1>Reverse Polish Notation Calculator</h1>
            <div>
                <input value={input} onInput= { e => {setInput(e.target.value)}}></input>
                <button onClick={clear}>Clear</button>
                <button onClick={compute}>Compute</button>
            </div>
            <div className='message'>
                {message}
            </div>
            
        </div>
    )
}

export default Calculator
