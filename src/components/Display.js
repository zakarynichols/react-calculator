import React, { useSTate } from 'react';
import { evaluate } from 'mathjs'; // eval is a reserved word!
import Calculator from './Calculator';


const maxCharsAtFullSize = 6;
const scaleFactor = 'scale(0.36)';

const CalculatorDisplay = ({ value, maxPrecision }) => {
    const pointAt = `${value}`.indexOf('.');
    const decimalValue = value.substring(pointAt, evaluate(value.length));
    const precisionWithFraction = (pointAt === -1) ? 0 : evaluate(decimalValue.length - 1);
    let formattedValue = parseFloat(value).toLocaleString(undefined, { minimumFractionDigits: precisionWithFraction }); // take the default locale formatting
    let scientificNotation = parseFloat(value).toExponential(maxPrecision - 4); // Allow at least 4 characters (for scientific notation e.g. e+14) in the output string
    const scaleDown = (`${formattedValue}`.length) > maxCharsAtFullSize ? scaleFactor : 'scale(1)';

    if (formattedValue === 'NaN') { //account for errors
        formattedValue = 'Error';
        return;
    }

    if (formattedValue.length > 15) {
        formattedValue = scientificNotation;
    }

    if (scientificNotation.substring(scientificNotation.length - 3, scientificNotation.length) === 'e+0') { // if exponent part is not needed
        scientificNotation = parseFloat(value).toExponential(maxPrecision - 1);
        scientificNotation = scientificNotation.substring(0, scientificNotation.length - 3);
    }

    return (
        <div className="calculator-display">
            <div className="auto-scaling-text" style={{ transform: scaleDown }}>
                {formattedValue}
            </div>
        </div>
    );
}

export default CalculatorDisplay;