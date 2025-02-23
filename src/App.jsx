import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './components/redux/contactsOps';
import {
  selectContacts,
  selectLoading,
  selectError,
} from './components/redux/contactsSlice';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  // Виконуємо запит на отримання контактів при завантаженні компонента
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="app">
      <h1>Contact Book</h1>

      {loading && <p>Loading contacts...</p>}
      {error && <p>Error: {error}</p>}

      <ContactForm />
      <ContactList contacts={contacts} />
    </div>
  );
}
