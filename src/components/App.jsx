import { useState } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {

    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return (good * 100) / countTotalFeedback();
  };

  const onLeaveFeedback = e => {
    const { value } = e.target;

    switch (value) {
      case 'good':
        setGood(s => s + 1);
        break;

      case 'neutral':
        setNeutral(s => s + 1);
        break;

      case 'bad':
        setBad(s => s + 1);
        break;

      default:
        return;
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback()  ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback!" />
        )}
      </Section>
    </>
  );
}
  export default App;
