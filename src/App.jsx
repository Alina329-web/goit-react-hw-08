import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from './redux/contactsOps';
import {
  selectContacts,
  selectLoading,
  selectError,
} from './redux/contactsSlice';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

export default function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="app">
      <h1>Contact Book</h1>
      <SearchBox />

      {loading && <p>Loading contacts...</p>}
      {error && <p>Error: {error}</p>}

      <ContactForm />
      <ContactList contacts={contacts} />
    </div>
  );
}
