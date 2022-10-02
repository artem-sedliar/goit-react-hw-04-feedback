
import PropTypes from 'prop-types';
import s from './Section.module.css';

const Section = ({ children, title }) => (
  <section className={s.section}>
    <h2 className={s.title}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;