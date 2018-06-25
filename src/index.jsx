import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
import messagesReducer from './reducers/messages_reducer';
import selectedChannelReducer from './reducers/selected_channel_reducer';

const identityReducer = (state = null) => state;

const initialState = {
  channels: ['voyagr', 'general', 'london'],
  currentUser: prompt("What is your username?"),
  messages: [],
  selectedChannel: 'voyagr'
};

const reducers = combineReducers({
  messages: messagesReducer,
  channels: identityReducer,
  currentUser: identityReducer,
  selectedChannel: selectedChannelReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('app')
);
