import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Posts from './component/posts';
import './App.css';

function App() {

  return (
    <Provider store={store}>
      
      <Posts />
    </Provider>
  );
}

export default App;
