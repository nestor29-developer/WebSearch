import thunk from 'redux-thunk';
import reducers from './reducers';
import sagas from './sagas';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
console.log('store.sagaMiddleware', sagaMiddleware);
// const composeEnhancers = compose(
//   (typeof window !== 'undefined' && window.devToolsExtension) ? window.devToolsExtension() : f => f
//  );
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(sagaMiddleware, thunk),
  ),
);
sagaMiddleware.run(sagas);

export default store;
