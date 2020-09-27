import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router';
import store from '../store';
import theme from '../theme';

export default function TestProvider({ children }) {
  const historyval = createMemoryHistory();
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router history={historyval}>
          {children}
        </Router>
      </Provider>
    </ThemeProvider>
  );
}
