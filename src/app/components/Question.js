import React from 'react'


export class Question extends React.Component {
    render() {
        var number1 = Math.floor(Math.random() * 20);
        var number2 = Math.floor(Math.random() * 20);
        return (
            <div>
                <p>Hello Hannah, lets find some treasure using maths</p>
                {number1 + " + " + number2 + " = "}

            </div>
        );
    }
}
