import React from "react";

export class Home extends React.Component {
    render() {
        var question = function(){
          return <p>Hello Hannah</p>
        }
        return (
            <div>
                <p>Hello Hannah, lets find some treasure using maths</p>
                {question()}
            </div>
        );
    }
}
