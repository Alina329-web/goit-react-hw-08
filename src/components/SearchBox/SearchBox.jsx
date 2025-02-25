import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';
import styles from './SearchBox.module.css';

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.search}
        type="text"
        placeholder="Search contacts"
        onChange={handleChange}
      />
    </div>
  );
}
