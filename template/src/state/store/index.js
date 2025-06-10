import { configureStore } from '@reduxjs/toolkit';
import theme from 'state/theme';

const store = configureStore({
  reducer: {
    theme,
  },
});

export { store };
