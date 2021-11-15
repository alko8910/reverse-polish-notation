import React, { useState } from 'react';



function Calculator() {

    const [input, setInput] = useState([''])
    const [message, setMessage] = useState('');
    const [color, setColor] = useState('white');
    const [textColor, setTextColor] = useState('#4097fb')
    let stack = [];
    console.log(stack)
    let arr = [];
    // let operator = [];

    const compute = () => {
        if (input.length === 0) {
            return setMessage('You did not enter antyhing!')
        } else {
            arr = input.split(',');
        }
           console.log(arr)
        for (var i = 0; i < arr.length; i++) {
            // converts string to number and push to stack 
            stack.push(parseFloat(arr[i]));
            // remove NaN from stack
            stack = stack.filter(value => !Number.isNaN(value));

        }

        const isValidElement = (elem) => {
            if (["+", "-", "*", "/"].includes(elem)) {
                return true;
            }

            return !Number.isNaN(Number(elem));
        }

    
        if (arr.some(elem => !isValidElement(elem))) {
            setMessage('Only numbers and arithmetic operators are valid')

            } else {
            if (stack.length * 2 === arr.length + 1) {
                for (let j = 0; j < arr.length; j++) {
                    if (arr[j] === "+" || arr[j] === '-' || arr[j] === '/' || arr[j] === '*') {
                        const b = stack.pop();
                        const a = stack.pop();

                        const oper = arr[j];
                        switch (oper) {
                            case '+':
                                stack.push(b + a)
                                break;
                            case '-':
                                stack.push(b - a)
                                break;
                            case '/':
                                stack.push(b / a)
                                break;
                            case '*':
                                stack.push(b * a)
                                break;
                            default:
                        }

                    }
                    console.log(stack)

                    setColor('#4097fb');
                    setTextColor('white')
                    setInput(`${input} = ${stack[0].toFixed(2)}`)
                    setMessage('')

                }
            } else if (stack.length * 2 > arr.length + 1) {
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
                <input placeholder='Enter the operand and operator: 2,6,5.5,4,*,-,+' value={input} onInput={e => { setInput(e.target.value) }}></input>

                <button onClick={clear}>Clear</button>
                <button onClick={compute} style={{ background: color, color: textColor }}>Compute</button>
            </div>

            <div className='message'>
                {message}
            </div>

        </div>
    )
}

export default Calculator
