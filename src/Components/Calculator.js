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

        
        
        
        console.log(arr)
        for(var i = 0; i < arr.length; i++){
            // converts string to number and push to stack 
            stack.push(parseFloat(arr[i]));
            // remove NaN from stack
            stack = stack.filter( value => !Number.isNaN(value) );
         
    }
    console.log(arr)
    for(var j = 0; j < arr.length; j++) {
        if(arr[j] === "+" || arr[j] === '-' || arr[j] === '/' || arr[j] === '*' ){
            let b = stack.pop();
            console.log(b);
            let a = stack.pop();
            console.log(a)
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
    
    } console.log(stack)
   
}

    const clear = () => {
       return setInput('');

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
