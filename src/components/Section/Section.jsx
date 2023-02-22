import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ children, title }) => {
  return (
    <section className={css.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Section.prototype = {
  children: PropTypes.element,
  title: PropTypes.string,
};
