import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackButtons from './Buttons/Buttons';
import Notification from './Notification/Notification';
import Header from './Header/Header';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = event => {
    const name = event.target.name;
    switch (event.target.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  };
  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <div
      style={{
        height: '100vh',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        backgroundColor: '#010101',
      }}
    >
      <Header message="Please leave your feedback!" />
      <FeedbackButtons variant={leaveFeedback} />
      {countTotalFeedback() ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      ) : (
        <Notification message="There is no feedback!" />
      )}
    </div>
  );
};

/* 
class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = event => {
    const name = event.target.name;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };
  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          backgroundColor: '#010101',
        }}
      >
        <Header message="Please leave your feedback!" />
        <FeedbackButtons variant={this.leaveFeedback} />
        {this.countTotalFeedback() ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback!" />
        )}
      </div>
    );
  }
} */

export default App;
