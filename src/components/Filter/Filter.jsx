import React, { Component } from 'react';
import css from './Filter.module.css';
import PropTypes from 'prop-types';

export class Filter extends Component {
  render() {
    return (
      <label className={css.labelFilter}>
        Find contact by name
        <input
          type="text"
          value={this.props.filterChange}
          onChange={this.props.onInputFilter}
        />
      </label>
    );
  }
}

Filter.propTypes = {
  filterChange: PropTypes.string.isRequired,
  onInputFilter: PropTypes.func.isRequired,
};
