// import React from 'react';
// import { render } from 'react-dom';
// import App from './components/test.component'

// render(
//   <App />
//   , document.getElementById('root')
// )





// const App = () => {
//     return <h1>
//         Welcome asasdasdasdasd!!!.
//     </h1>, document.getElementById('app')
// }

// ReactDOM.render(  <App />,document.getElementById('root'));





import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import theme from './theme';


ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
