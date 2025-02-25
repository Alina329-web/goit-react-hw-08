import styles from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

export default function ContactForm() {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;
    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactsForm}>
      <input type="text" name="name" required placeholder="Name" />
      <input type="text" name="number" required placeholder="Phone" />
      <button type="submit" className={styles.contactsBtn}>
        Add Contact
      </button>
    </form>
  );
}
