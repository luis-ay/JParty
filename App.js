import Core from './Core';
import { Provider } from 'react-redux';
import store from './store';
import React from 'react';


console.log(store.getState())
const App = () => {
  return (
    <>
      <Provider>
        <Core/>
      </Provider>
    </>
  );
}


export default App;
