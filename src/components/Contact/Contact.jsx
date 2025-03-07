import s from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations.js';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <div className={s.contact}>
      <p>{name}</p>
      <p>{number}</p>
      <button className={s.button} onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
