import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/contactsOps';
import { selectContacts } from '../redux/contactsSlice';
import styles from './ContactList.module.css';

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.contactItem}>
          <p>
            {contact.name} : {contact.number}
          </p>
          <button onClick={() => dispatch(deleteContact(contact.id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
