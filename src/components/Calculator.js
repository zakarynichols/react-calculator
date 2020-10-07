import React, { useState } from 'react';
import { evaluate } from 'mathjs'; // eval is a reserved word!
import CalculatorDisplay from './Display';

/* Components */
const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);
    const [firstOperand, setFirstOperand] = useState('0');
    const [clearAll, setClearAll] = useState(true);
    const maxPrecision = 16;

    const handleDigit = (newKeyValue) => {
        if (waitingForOperand) {
            setDisplayValue(`${newKeyValue}`);
            setWaitingForOperand(false);
            setClearAll(false);
            console.log(displayValue, waitingForOperand, clearAll)
        } else {
            const newDisplayValue = (displayValue === '0') ? `${newKeyValue}` : `${(displayValue)}${newKeyValue}`; //no leading zero
            setDisplayValue(`${newDisplayValue}`);
            setWaitingForOperand(false);
            setClearAll(false);
        }
    }

    const handleOperator = (newKeyValue) => {
        if (firstOperand === '0' || operator == null || waitingForOperand) { // if not ready to do calculation
            setWaitingForOperand(true);
            setFirstOperand(displayValue);
            setOperator(newKeyValue);
            setClearAll(false);
            console.log('here')
            return;
        };

        const stringToEvaluate = `${firstOperand}${operator}${displayValue}`;
        console.log(stringToEvaluate)
        const newDisplayValue = `${evaluate(stringToEvaluate)}`;

        if (newDisplayValue === "Infinity") { //math.js evaluates division by 0 to be "Infinity"
            setDisplayValue('Error');
        };

        const newOperator = (newKeyValue === "=") ? null : newKeyValue;
        setDisplayValue(`${newDisplayValue}`);
        setWaitingForOperand(true);
        setFirstOperand(`${newDisplayValue}`);
        setOperator(newOperator);
        setClearAll(false);
    };

    const handlePoint = (newKeyValue) => {
        const needPoint = `${displayValue}`.indexOf('.') === -1 ? true : false;

        if (waitingForOperand) { // allow point if starting on a new operand
            setDisplayValue('0');
            setWaitingForOperand(false);
            setClearAll(false);
            return;
        };

        if (needPoint) { //if not inputting new operand, only allow point if it's not already present
            setDisplayValue(`${displayValue}${newKeyValue}`);
            setWaitingForOperand(false);
            setClearAll(false);
        };
    }

    const handlePercentage = () => {
        const newDisplayValue = parseFloat(displayValue).toPrecision(maxPrecision) / 100;

        setDisplayValue(`${newDisplayValue}`);
        setWaitingForOperand(false);
        setClearAll(false);
    }

    const handlePlusMinusToggle = () => {
        const newDisplayValue = parseFloat(displayValue).toPrecision(maxPrecision) * -1

        setDisplayValue(`${newDisplayValue}`);
        setWaitingForOperand(false);
        setClearAll(false);
    }

    const handleClear = () => {
        console.log('clearAll', clearAll);
        if (clearAll) {
            setDisplayValue('0');
            setFirstOperand('0');
            setOperator(null);
            setWaitingForOperand(false);
            setClearAll(true);
        } else {
            setDisplayValue('0');
            setClearAll(true);
        }
    }


    const handleKeyPress = (newKeyValue) => {
        /* don't do anything, just write the error to the console log */
        console.log('Input Value: ', newKeyValue);
    }

    const handleFunctionKey = (newKeyValue) => {
        switch (newKeyValue) {
            case "C":
                handleClear(newKeyValue);
                break;
            case "±":
                handlePlusMinusToggle(newKeyValue);
                break;
            case ".":
                handlePoint(newKeyValue);
                break;
            case "%":
                handlePercentage(newKeyValue);
                break;
            default:
                handleKeyPress(newKeyValue);
        }
    }


    const handleClick = (e) => {
        handleNewKey(`${e.target.value}`);
    }

    const handleNewKey = (newKeyValue) => {
        const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
        const operators = ['/', '*', '-', '+', '='];

        const isDigit = digits.includes(newKeyValue);
        const isOperator = operators.includes(newKeyValue);

        if (isDigit) {
            handleDigit(newKeyValue);
        }
        if (isOperator) {
            handleOperator(newKeyValue);
        } else {
            handleFunctionKey(newKeyValue);
        }
    }

    return (
        <div className="calculator">
            <CalculatorDisplay value={displayValue} maxPrecision={maxPrecision} />

            <div className="calculator-keypad">
                <div className="input-keys">
                    <div className="function-keys">
                        <button id="key-clear" value="C" className="calculator-key key-clear" onClick={handleClick}>{clearAll ? 'AC' : 'C'}</button>
                        <button id="key-sign" value="±" className="calculator-key key-sign" onClick={handleClick}>&plusmn;</button>
                        <button id="key-percent" value="%" className="calculator-key key-percent" onClick={handleClick}>%</button>
                    </div>

                    <div className="digit-keys">
                        <button id="key-0" value="0" className="calculator-key key-0" onClick={handleClick}>0</button>
                        <button id="key-dot" value="." className="calculator-key key-dot" onClick={handleClick}>&middot;</button>
                        <button id="key-1" value="1" className="calculator-key key-1" onClick={handleClick}>1</button>
                        <button id="key-2" value="2" className="calculator-key key-2" onClick={handleClick}>2</button>
                        <button id="key-3" value="3" className="calculator-key key-3" onClick={handleClick}>3</button>
                        <button id="key-4" value="4" className="calculator-key key-4" onClick={handleClick}>4</button>
                        <button id="key-5" value="5" className="calculator-key key-5" onClick={handleClick}>5</button>
                        <button id="key-6" value="6" className="calculator-key key-6" onClick={handleClick}>6</button>
                        <button id="key-7" value="7" className="calculator-key key-7" onClick={handleClick}>7</button>
                        <button id="key-8" value="8" className="calculator-key key-8" onClick={handleClick}>8</button>
                        <button id="key-9" value="9" className="calculator-key key-9" onClick={handleClick}>9</button>
                    </div>
                </div>

                <div className="operator-keys">
                    <button id="key-divide" value="/" className="calculator-key key-divide" onClick={handleClick}>&divide;</button>
                    <button id="key-multiply" value="*" className="calculator-key key-multiply" onClick={handleClick}>&times;</button>
                    <button id="key-subtract" value="-" className="calculator-key key-subtract" onClick={handleClick}>&ndash;</button>
                    <button id="key-add" value="+" className="calculator-key key-add" onClick={handleClick}>+</button>
                    <button id="key-equals" value="=" className="calculator-key key-equals" onClick={handleClick}>=</button>
                </div>
            </div>
        </div>
    )

}

export default Calculator;