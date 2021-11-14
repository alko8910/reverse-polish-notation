import React, { useState } from 'react';



function Calculator() {

    const [input, setInput] = useState([''])
    const [message,setMessage] = useState('');
    const [color, setColor] = useState('white');
    const [textColor, setTextColor]= useState('#4097fb')
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
if(arr.some(elem => !['+', '-','/','*','0','1','2','3','4','5','6','7','8','9','.'].includes(String(elem)))) {
    setMessage('Only numbers and arithmetic operators are valid')
    
} else {
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
  
        setColor('#4097fb');
        setTextColor('white')
        setInput(`${input} = ${stack}`)
        setMessage('')

        }    
    } else if(stack.length * 2 > arr.length + 1) {
        setMessage('Something went wrong! Check the number of operands!')
    } else {
        setMessage('Something went wrong! Check the number of operators!')
    }
    }
  
}

    const clear = () => {
        setInput('');
        setMessage('');
        setColor('white');
        setTextColor('#4097fb');
    }

 return (
        <div className='main-div'>
            <h1>Reverse Polish Notation Calculator</h1>
            <div>
                <input value={input} onInput= { e => {setInput(e.target.value)}}></input>
                <button onClick={clear}>Clear</button>
            <button onClick={compute} style={{background: color, color:textColor}}>Compute</button>
            </div>
            <div className='message'>
                {message}
            </div>
            
        </div>
    )
}

export default Calculator
