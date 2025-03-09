// import { createSelector } from 'reselect';

// export const selectFilter = state => state.filter;
// export const selectContacts = state => state.contacts.items;
export const selectNameFilter = state => state.filters.name;

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   }
// );
