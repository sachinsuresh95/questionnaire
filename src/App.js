import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

import Question from './components/Question';
import ThankYou from './components/ThankYou';
import Result from './components/Result'
import './App.css';
import questionStore from './questions';

class App extends React.Component {
  state = {
    questions: questionStore,
    currentIndex: 0,
    showFinalScreen: false
  }


  // this function controls the logic to decide which screen to show next
  getNextIndex = () => {
    let { questions } = this.state;
    let currentIndex = this.state.currentIndex;
    let nextIndex = 0;
    if (currentIndex >= 3) {
      nextIndex = questions.length;
    } else if (currentIndex === 0) {
      nextIndex = questions[currentIndex].options.indexOf(questions[currentIndex].answer) === 0 ? 1 : 2;
    } else if (currentIndex === 1) {
      nextIndex = questions[currentIndex].options.indexOf(questions[currentIndex].answer) === 0 ? questions.length : 3;
    }
    else if (currentIndex === 2) {
      nextIndex = questions[currentIndex].options.indexOf(questions[currentIndex].answer) === 0 ? questions.length : 4;
    }

    return nextIndex;
  }

  showNext = () => {
    let nextIndex = this.getNextIndex();
    this.setState(state => ({
      ...state,
      currentIndex: nextIndex
    }))
  }

  handleChange = (value, qid) => {
    this.setState(state => ({
      ...state,
      questions: state.questions.map(question => {
        return question.id === qid ? {
          ...question,
          answer: value
        } : question;
      })
    }))
  }

  showResult = () => {
    console.log('show result now')
    this.setState(state => ({
      ...state,
      showFinalScreen: true
    }))
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header style={headerStyles}>
          <div className="container"><h2>My App</h2></div>
        </header>
        {this.state.currentIndex >= this.state.questions.length ? this.state.showFinalScreen ? <Result questions={this.state.questions} /> : <ThankYou showResult={this.showResult} /> : (
          <Question handleChange={this.handleChange} currentQuestion={this.state.questions[this.state.currentIndex]} showNext={this.showNext} />
        )}
      </div>
    );
  }
}

const headerStyles = {
  background: 'steelblue',
  color: 'white',
  padding: '20px 0'
}


export default App;
