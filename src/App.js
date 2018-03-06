import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducers from './reducers/index.js';
import Layout from './components/layout'


const store = createStore(allReducers);


store.subscribe(() => console.log(store.getState()));
const App = () =>(
  <Provider store={store}>
  <Layout />
  </Provider>
);

export default App;
