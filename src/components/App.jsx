import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';

import { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedBackOptions = ['good', 'neutral', 'bad'];

  const handleClick = e => {
    const buttonValue = e.target.value;

    switch (buttonValue) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        alert('Unexpected button value');
        break;
    }
  };

  const countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = (good, neutral, bad) => {
    const total = countTotalFeedback(good, neutral, bad);
    return Math.round((good / total) * 100);
  };

  return (
    <Section title="Please leave feedback">
      <FeedbackOptions
        options={feedBackOptions}
        onLeaveFeedback={handleClick}
      />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={countTotalFeedback}
        positivePercentage={countPositiveFeedbackPercentage}
      />
    </Section>
  );
};

export default App;
