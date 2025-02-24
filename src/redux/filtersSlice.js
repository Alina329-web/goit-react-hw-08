import { createSlice } from '@reduxjs/toolkit';

// Початковий стан для фільтра
const initialState = {
  name: '', // Змінна для фільтрування за ім'ям
};

// Створення слайсу для фільтру
const filtersSlice = createSlice({
  name: 'filters', // Назва слайсу
  initialState,
  reducers: {
    // Редуктор для оновлення значення фільтра
    setNameFilter(state, action) {
      state.name = action.payload; // Оновлення значення фільтру
    },
  },
});

// Експортуємо дії слайсу
export const { setNameFilter } = filtersSlice.actions;

// Експортуємо редуктор слайсу за замовчуванням
export default filtersSlice.reducer; // Це має бути default export
