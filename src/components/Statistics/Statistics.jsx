import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <p className={s.statText}>
      Good:
      <span className={s.statValue}>{good}</span>
    </p>
    <p className={s.statText}>
      Neutral:
      <span className={s.statValue}>{neutral}</span>
    </p>
    <p className={s.statText}>
      Bad:
      <span className={s.statValue}>{bad}</span>
    </p>
    <p className={s.statText}>
      Total:
      <span className={s.statValue}>{total()}</span>
    </p>
    <p className={s.statText}>
      Positive feedback:
      <span className={s.statValue}>
        {Math.round(positivePercentage()) || '0'}%
      </span>
    </p>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;