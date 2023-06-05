import css from './Filter.module.css';
import PropTypes from 'prop-types';

export function Filter({ filterChange, onInputFilter }) {
  return (
    <label className={css.labelFilter}>
      Find contact by name
      <input type="text" value={filterChange} onChange={onInputFilter} />
    </label>
  );
}

Filter.propTypes = {
  filterChange: PropTypes.string.isRequired,
  onInputFilter: PropTypes.func.isRequired,
};
