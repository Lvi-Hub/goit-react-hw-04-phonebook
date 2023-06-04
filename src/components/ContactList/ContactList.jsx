import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export class ContactList extends Component {
  render() {
    return (
      <ul className={css.contactList}>
        {this.props.contacts.map(({ id, name, number }) => {
          return (
            <li className={css.contactItem} key={id}>
              <p className={css.contactName}>
                {name}: {number}
              </p>
              <button
                className={css.btnDelete}
                onClick={() => this.props.onDeleteContact(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
