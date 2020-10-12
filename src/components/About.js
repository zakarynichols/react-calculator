import React from 'react';

const About = () => {
    return (
        <div>
            <h1>
                About
            </h1>
            <div>
                <h3>🔨 Built Using: 🔨</h3>
                <ul style={{ textAlign: 'left', }}>
                    <li className="li-space">
                        <strong>React</strong> with <strong>Hooks</strong> for <strong>state management</strong> and <strong>dynamic user interface.</strong>
                    </li>
                    <li className="li-space">
                        <strong>React Router</strong> for painless <strong>client-side routing</strong>.
                    </li>
                    <li className="li-space">
                        <strong>Math.js</strong> to <strong>evaluate expressions</strong> instead of the <strong style={{ color: 'red' }}>dangerous</strong> <code>eval()</code> in JavaScript.
                    </li>
                </ul>
                <h3>💻 Code Summary: 💻</h3>
                <p style={{ textAlign: 'left', marginLeft: '50px', marginRight: '50px', lineHeight: '20px' }}>
                    On each click event <code>handleClick(e)</code> will pass the value of the button clicked to <code>handleNewKey(newKeyValue)</code> to handle the value.
                    There is a function to handle digits (0-9) <code>handleDigit(newKeyValue)</code>, operators (+, -, *, /, and =) <code>handleOperator(newKeyValue)</code>, and the other buttons on the calculator. 
                    If the string is a valid expression then <code>Display.js</code> will format accordingly.
                </p>
            </div>
        </div>
    )
};

export default About;