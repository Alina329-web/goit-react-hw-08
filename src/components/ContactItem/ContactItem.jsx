import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import styles from './ContactItem.module.css';

export default function ContactItem({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={styles.contactContainer}>
      <li className={styles.contactItem}>
        <p className={styles.contactDetails}>
          {contact.name}: {contact.phone}
        </p>
        <button className={styles.deleteButton} onClick={handleDelete}>
          Delete
        </button>
      </li>
    </div>
  );
}
