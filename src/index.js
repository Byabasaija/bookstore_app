import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers';

const initialState = {
  books: [{
    id: Math.random().toString(),
    title: 'First Book',
    cat: 'Action',
  },
  {
    id: Math.random().toString(),
    title: 'Second Book',
    cat: 'Biography',
  },
  {
    id: Math.random().toString(),
    title: 'Third Book',
    cat: 'History',
  },

  ],
};
const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
