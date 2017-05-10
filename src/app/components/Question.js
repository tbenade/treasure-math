import React from 'react'

export class Question extends React.Component {
  constructor(props) {
    super();
    this.state = {
        question:this.makeQuestion(),
        answer:''
    }
  }

  makeQuestion() {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    let operator = "+";
    if (a > b) {
      if (a %  b === 0) {
        operator = ["*", "+", "/", "-"][Math.floor(Math.random()*4)];
      }else{
        operator = ["*", "+", "-"][Math.floor(Math.random()*3)];
      }
    } else {
      operator = ["*", "+"][Math.floor(Math.random()*2)];
    }

    let answer = eval( a + operator + b)

    let question = {
      a: a,
      b: b,
      operator: operator,
      answer: answer
    }
    console.log( a + operator + b)
    console.log(question)
    return question;
  }

  Result(props) {
    if (this.state.isCorrect) {
      return (
        <div className="alert alert-success">
          <strong>Correct!</strong>
        </div>
      )
    }
  }

  markAnswer(event){
    if(this.state.answer == this.state.question.answer){
      this.state.isCorrect = true;
    }
    this.ask();
  }

  handleChange(event) {
    this.setState({answer: event.target.value});
  }

  ask(){
    let newQuestion = this.makeQuestion();
    console.log(newQuestion)
    this.setState({
      question:newQuestion
    })
  }


  render() {
    return (
      <div>
        <label>
          Answer the clue  {this.state.question.a} {this.state.question.operator} {this.state.question.b} =
            <input type="text" value={this.state.answer} onChange={(event) => this.handleChange(event)} />
        </label>
        <button onClick={(event) => this.markAnswer(event)}>Answer</button>
      </div>
    );
  }
}
