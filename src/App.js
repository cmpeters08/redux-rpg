import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers/index.js';
import Layout from './components/layout'
import creatureList from './containers/creature-list';
import CreatureReducer from './reducers/reducer-creatures';


const store = createStore(allReducers);


store.subscribe(() => console.log(store.getState()));
const App = () =>(
  <Provider store={store}>
  <Layout
  />
  </Provider>
);

export default App;
