import React from 'react';
import {Provider} from 'react-redux';
import theStore from './redux/store.js';
import NewPost from './components/NewPost';
import DisplayPosts from './components/DisplayPosts';
import './App.css';

const store = theStore(); 

store.subscribe(() => {
  console.log(store.getState());
});

const App = () => {

  return (
    <Provider store={store}>
      <h1>Blog App.</h1>
      <NewPost />
      <DisplayPosts />
    </Provider>
  );
}

export default App;
